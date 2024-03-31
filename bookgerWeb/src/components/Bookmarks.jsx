import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

const Bookmarks = () => {
  const navigate = useNavigate();
  const [bookmarks, setBookmarks] = useState([]);
  const [docIds, setDocIds] = useState([]); // [docId1, docId2, docId3, ...
  const [folders, setFolders] = useState([]);
  const [groupedBookmarks, setGroupedBookmarks] = useState(new Map());
  async function getAllDocuments() {
    const querySnapshot = await getDocs(collection(db, "bookmarks"));
    const data = querySnapshot.docs.map((doc) => {
      return {
        data: doc.data(),
        id: doc.id,
      };
    });
    console.log(data);
    setBookmarks(data);
    groupBookmarksByFolder(data);
  }

  function groupBookmarksByFolder(bookmarks) {
    // Initialize an empty map to store grouped bookmarks
    const groupedBookmarks = new Map();
    const folders = [];

    // Iterate over each bookmark
    bookmarks.forEach((bookmark) => {
      const folderCategory = bookmark.data.folderCategory;

      // Check if the bookmark is a folder or a bookmark with a URL
      if (bookmark.data.URL !== "") {
        // If the bookmark has a URL, it's a bookmark, so add it to the corresponding folder/category
        if (groupedBookmarks.has(folderCategory)) {
          // If the folder/category exists, append the bookmark to its array
          groupedBookmarks.get(folderCategory).push(bookmark.data);
        } else {
          // If the folder/category doesn't exist, create a new array with the bookmark
          groupedBookmarks.set(folderCategory, [bookmark.data]);
        }
      } else {
        // If the bookmark doesn't have a URL, it's a folder, so add it to the folders array
        folders.push({ name: bookmark.data.title, id: bookmark.id });
      }
    });
    setGroupedBookmarks(groupedBookmarks);
    setFolders(folders);
    console.log(groupedBookmarks, folders);
    return { groupedBookmarks, folders };
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("User is signed out");
        navigate("/");
      }
    });
    getAllDocuments();
    return unsubscribe;
  }, []);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <p className="btn btn-ghost text-xl">
            {"Welcome! " + auth.currentUser?.displayName}
          </p>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={`https://avatar.iran.liara.run/username?username=${
                    auth.currentUser?.displayName + ""
                  }`}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li></li>
              <li>
                <p onClick={() => auth.signOut()}>Logout</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="w-full stats shadow items-stretch justify-evenly">
          <div className="stat place-items-center">
            <div className="stat-title">Total Folders</div>
            <div className="stat-value">
              {folders?.length !== 0 ? folders?.length : 0}
            </div>
            <div className="stat-desc">Total folders in bookmarks</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Total Links</div>
            <div className="stat-value text-secondary">{bookmarks?.length}</div>
            <div className="stat-desc text-secondary">
              Total bookmarks present
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {folders.map((item, idx) => (
          <div className="my-10 mt-20" key={idx + 1}>
            <h1 className="font-bold text-xl ml-5">{item.name}</h1>
            <div className="flex gap-5 mx-5 flex-wrap">
              {groupedBookmarks.get(item.id)?.map((bookmark) => (
                <div
                  key={bookmark.title}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  <div className="card-body">
                    <h2 className="card-title text-base">
                      {bookmark.title.slice(0, 40)}
                    </h2>
                    <div className="card-actions justify-end">
                      <a href={bookmark.URL} className="btn btn-primary">
                        Visit
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
