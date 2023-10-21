import React, { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";

type FormDataType = {
  avatar: string;
};

const Profile = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState<any>({});
  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
          setFormData({ ...formData, avatar: downloadURL })
        );
      }
    );
  };
  return (
    <div className="flex flex-col justify-center items-center w-[1200px] m-auto p-24">
      <h1>Profile</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        ref={fileRef}
        className="hidden"
        accept="image/*"
      />
      <img
        onClick={() => fileRef.current.click()}
        src={currentUser.avatar}
        alt="user's profile image"
        className="w-32 cursor-pointer"
      />
      <p>
        {fileUploadError ? (
          <span className="text-red-500">
            Error uploading file(Image must be less than 2 MB)
          </span>
        ) : filePerc > 0 && filePerc < 100 ? (
          <span>Uploading {filePerc}%</span>
        ) : filePerc === 100 ? (
          <span className="text-green-400">Image uploaded</span>
        ) : (
          ""
        )}
      </p>
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
