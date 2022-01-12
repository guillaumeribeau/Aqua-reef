import React, { useContext, useState } from "react";
import { storage, db, auth } from "../../firebase/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { UserContext } from "../../context/UserContext";
import {
  addDoc,
  collection,
  doc,
  FieldValue,
  setDoc,
} from "firebase/firestore";

const Addphoto = ({StorageUrl,RegisterUrlInFireStore}) => {
  const [file, setFile] = useState(null);
  const { currentUser } = useContext(UserContext);

  const onFileChange = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const storageRef = ref(
      storage,
      `/${StorageUrl}/${file.name}`
    );
    console.log(storageRef);
    await uploadBytes(storageRef, file);
    // permet de stocker url dans firestore
    getDownloadURL(storageRef).then((url) => {
      setDoc(doc(db,`${RegisterUrlInFireStore}`), {
        url: url,
      });
    });
  };
  return (
    <div>
      <label htmlFor="img">Change la photo de ton Aquarium</label>
      <input
        id="img"
        type="file"
        accept=".png, .jpg, .jpeg"
        onChange={onFileChange}
      />
       <button onClick={onUpload}>Charger image</button>
      <span>{file && file.name}</span>
    </div>
  );
};

export default Addphoto;
