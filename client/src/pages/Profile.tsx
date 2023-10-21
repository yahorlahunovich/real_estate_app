import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";

const Profile = () => {
  const { currentUser, loading } = useAppSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState<any>({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useAppDispatch();
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  };
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
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
        src={formData.avatar ? formData.avatar : currentUser.avatar}
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
      <form className="flex flex-col gap-3 w-[300px]" onSubmit={handleSubmit}>
        <input
          type="text"
          id="firstName"
          defaultValue={currentUser.firstName}
          className="border border-1-black w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          id="email"
          defaultValue={currentUser.email}
          className="border border-1-black w-full"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Password"
          className="border border-1-black w-full"
        />
        <button className="border border-1-black" disabled={loading}>
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex flex-row justify-between items-center w-[300px] mt-5">
        <button>Delete Account</button>
        <button>Sign out</button>
      </div>
      <p className="text-green-400">
        {updateSuccess ? "User updated successfully!" : ""}
      </p>
    </div>
  );
};

export default Profile;
