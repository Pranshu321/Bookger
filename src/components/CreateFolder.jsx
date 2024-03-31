import s from "./CreateFolder.module.css";
import { FaFolderPlus } from "react-icons/fa";
import { forwardRef } from "react";
import { NewFolderNameAtom } from "../state/atoms";
import { useAtom } from "jotai";

const CreateFolder = forwardRef(function CreateFolder(props, createFolderRef) {
  // new folder name atom

  const [, setFolderName] = useAtom(NewFolderNameAtom);
  return (
    <div ref={createFolderRef} className={s.wrapper}>
      <form>
        <h3>
          <FaFolderPlus /> New Folder
        </h3>

        <div>
          <label htmlFor="title">New Folder Name</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setFolderName(e.target.value)}
          />
        </div>
        <button onClick={props.onNewFolder}>Done</button>
      </form>
    </div>
  );
});

export default CreateFolder;
