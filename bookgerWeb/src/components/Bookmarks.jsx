import React, { useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
      } else {
        console.log("User is signed out");
        navigate("/");
      }
    });

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
        <div className="stats shadow items-center justify-center">
          <div className="stat place-items-center">
            <div className="stat-title">Total Folders</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary">4,200</div>
            <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
