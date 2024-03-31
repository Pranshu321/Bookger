import { useEffect, useCallback, useRef, useState } from "react";
import s from "./App.module.css";
import { useAtom } from "jotai";
import { useClickOutside } from "./hooks/useClickOutside";
import { auth, db } from "./firebase/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore";

import {
  bookmarksAtom,
  folderIdAtom,
  subTreeAtom,
  parentsAtom,
  updateIdAtom,
  clickedAtom,
  deleteConfirmAtom,
  isFolderAtom,
  newFolderAtom,
  isPreviewAtom,
  NewFolderNameAtom,
  logged,
} from "./state/atoms";
import Window from "./components/Window/Window";
import Sidebar from "./components/Sidebar/Sidebar";
import Context from "./components/Context";
import CreateFolder from "./components/CreateFolder";

import DeleteConfirm from "./components/DeleteConfirm";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [deleteConfirm, setDeleteConfirm] = useAtom(deleteConfirmAtom);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);
  const [folderId] = useAtom(folderIdAtom);
  const [, setlogged] = useAtom(logged);
  const [newFolderNameAtom] = useAtom(NewFolderNameAtom);
  const [, setSubTree] = useAtom(subTreeAtom);
  const [, setParents] = useAtom(parentsAtom);
  const [updateId] = useAtom(updateIdAtom);
  const [clicked, setClicked] = useAtom(clickedAtom);
  const [isFolder] = useAtom(isFolderAtom);
  const [newFolder, setNewFolder] = useAtom(newFolderAtom);
  const [isPreview, setIsPreview] = useAtom(isPreviewAtom);

  const ctxRef = useRef(null);
  const deleteConfirmRef = useRef(null);
  const createFolderRef = useRef(null);
  const previewRef = useRef(null);

  useClickOutside(ctxRef, () => setClicked(false));
  useClickOutside(deleteConfirmRef, () => setDeleteConfirm(false));
  useClickOutside(createFolderRef, () => setNewFolder(false));
  useClickOutside(previewRef, () => setIsPreview(false));

  const bookmarksCb = useCallback(() => {
    chrome.bookmarks.getTree((bookmarks) => {
      sendBookmarkDataToFirestore(bookmarks);
      setBookmarks(bookmarks[0].children);
      addHasFolders(bookmarks[0].children);
    });
  });

  const subTreeCb = useCallback(() => {
    chrome.bookmarks.getSubTree(folderId, (subTree) => {
      console.log("subTree", subTree);
      setSubTree(subTree[0]);
    });
  }, [folderId]);

  const parentCb = useCallback((bookmarks, id) => {
    for (let i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].id == id) {
        console.log("bookmarks[i]", bookmarks[i]);
        return bookmarks[i];
      } else if (bookmarks[i].children != null) {
        let result = parentCb(bookmarks[i].children, id);
        if (result != null) {
          console.log("result", result);
          return result;
        }
      }
    }
    return null;
  });

  useEffect(() => {
    bookmarksCb();
    subTreeCb();
    findParents(folderId);
  }, [folderId]);

  function addHasFolders(bookmarks) {
    try {
      bookmarks.forEach((bookmark) => {
        if (bookmark.children) {
          if (bookmark.children.some((child) => child.children)) {
            bookmark.hasFolders = true;
          } else {
            bookmark.hasFolders = false;
          }
          addHasFolders(bookmark.children);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    addHasFolders(bookmarks);
  }, [bookmarks]);

  const parentsArr = [];

  function findParents(id) {
    const parent = parentCb(bookmarks, id);
    if (parent?.id) {
      parentsArr.push({ id: parent.id, title: parent.title });
      setParents(parentsArr);
      findParents(parent.parentId);
    }
    console.log("parentsArr", parentsArr);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setlogged(true);
        const uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  function onDelete() {
    console.log(updateId);
    isFolder
      ? chrome.bookmarks.removeTree(updateId, () => {
          setDeleteConfirm(false);
          setClicked(false);
          bookmarksCb();
          subTreeCb();
        })
      : chrome.bookmarks.remove(updateId, () => {
          setDeleteConfirm(false);
          setClicked(false);
          bookmarksCb();
          subTreeCb();
        });
  }

  function onRename(newName) {
    chrome.bookmarks.update(updateId, { title: newName }, () => {
      setClicked(false);
      bookmarksCb();
      subTreeCb();
    });
  }

  function onEdit(newInfo) {
    chrome.bookmarks.update(
      updateId,
      { title: newInfo.title, url: newInfo.url },
      () => {
        setClicked(false);
        bookmarksCb();
        subTreeCb();
      }
    );
  }

  async function sendBookmarkDataToFirestore(bookmarks) {
    console.log("sendBookmarkDataToFirestore", bookmarks);
    try {
      const batch = [];

      // Iterate through each bookmark
      bookmarks.forEach(async (bookmark) => {
        const bookmarkData = {
          URL: bookmark.url || "", // Handle cases where URL might be undefined
          title: bookmark.title || "", // Handle cases where title might be undefined
          folderCategory: bookmark.parentId || "", // Assuming parentId indicates the folder/category
          timestamp: serverTimestamp(), // Automatically generate a server-side timestamp
        };

        // Create a Firestore document for the bookmark
        // const bookmarkDocRef = doc(db, "bookmarks", bookmark.id);
        console.log("bookmarkData", bookmarkData);
        batch.push(setDoc(doc(db, "bookmarks", bookmark.id), bookmarkData));

        // If the bookmark has children (i.e., it's a folder), recursively process its children
        if (bookmark.children && bookmark.children.length > 0) {
          const childrenBatch = await sendBookmarkDataToFirestore(
            bookmark.children
          );
          batch.push(...childrenBatch);
        }
      });

      // Execute the batched Firestore writes
      await Promise.all(batch);

      console.log("Bookmark data successfully sent to Firestore.");
    } catch (error) {
      console.error("Error sending bookmark data to Firestore: ", error);
    }
  }

  function onNewFolder() {
    setNewFolder(true);
    chrome.bookmarks.create(
      {
        parentId: folderId,
        title: newFolderNameAtom !== "" ? newFolderNameAtom : "New Folder",
      },
      (newFolder) => {
        bookmarksCb();
        subTreeCb();
      }
    );
  }

  return (
    <div className={s.main}>
      {logged ? (
        <div className={s.container}>
          <Sidebar onRename={onRename} />
          <Window bookmarksCb={bookmarksCb} onRename={onRename} />
        </div>
      ) : (
        <SignIn />
      )}

      {clicked && <Context onEdit={onEdit} ref={ctxRef} />}
      {deleteConfirm && (
        <DeleteConfirm onDelete={onDelete} ref={deleteConfirmRef} />
      )}
      {newFolder && (
        <CreateFolder onNewFolder={onNewFolder} ref={createFolderRef} />
      )}
    </div>
  );
}

export default App;
