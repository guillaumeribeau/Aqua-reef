import React, {useContext, useState} from 'react';
import {storage, db,auth} from '../../firebase/firebaseConfig'
import { getDownloadURL, ref,uploadBytes} from 'firebase/storage'
import { UserContext } from '../../context/UserContext';
import { addDoc, collection, doc, FieldValue, setDoc, } from 'firebase/firestore';






const Addphoto = ({urlPhoto,setUrlPhoto}) => {
const [file,setFile]= useState(null)
const {currentUser}= useContext(UserContext)

const onFileChange = (e) => {
    e.preventDefault()
 setFile(e.target.files[0])   
    
}
const onUpload =async () => {
   const storageRef= ref(storage, `/${currentUser.uid}/images/aquarium/${file.name}`)
   console.log(storageRef);
  await uploadBytes(storageRef, file)
  // permet de stocker url dans firestore 
const url= getDownloadURL(storageRef).then((url)=>{

 setDoc(doc(db, "users", currentUser.uid,"photo-aqua","photo-principal"),
  {
      url:url
  })

    setUrlPhoto(url)
})

  

}
    return (
        <div>
            <input type="file" onChange={onFileChange}/>
            <button onClick={onUpload}>Charger image</button>
            <span>{file && file.name}</span>
           
        </div>
    );
};

export default Addphoto;