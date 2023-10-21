import React from "react";
import { useAppSelector } from "../redux/hooks";

const Profile = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <div className="flex flex-col justify-center items-center w-[1200px] m-auto p-24">
      <h1>Profile</h1>
      <img
        src={currentUser.avatar}
        alt="user's profile image"
        className="w-32"
      />
      <form className="flex flex-col gap-3 w-[300px]">
        <input
          type="text"
          value={currentUser.firstName}
          className="border border-1-black w-full"
        />
        <input
          type="text"
          value={currentUser.email}
          className="border border-1-black w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="border border-1-black w-full"
        />
        <button className="border border-1-black">Update</button>
      </form>
      <div className="flex flex-row justify-between items-center w-[300px] mt-5">
        <button>Delete Account</button>
        <button>Sign out</button>
      </div>
    </div>
  );
};

export default Profile;
