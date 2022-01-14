import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SetMealIcon from "@mui/icons-material/SetMeal";
import InsightsIcon from "@mui/icons-material/Insights";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import Addphoto from "./Addphoto";
import { UserContext } from "../../context/UserContext";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
/**
 * dashboard naviagation
 * @components
 */

const DashboardNavigation = () => {
  const [mainPhoto, setmainPhoto] = useState("");
  const { currentUser } = useContext(UserContext);

  const [titleAqua, setTitleAqua] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [inputNameAqua, setInputNameAqua] = useState('');

  //const inputNameAqua = useRef();

  const toggle = () => {
    setEditToggle(!editToggle);
  };

  // useEffect for Main picture
  useEffect(() => {
    // select a document for picture aquarium
    const collectionRef = doc(
      db,
      "users",
      currentUser.uid,
      "aquarium",
      "main-photo"
    );
    
    //onsnapshot method firebase

    const unsub = onSnapshot(collectionRef, (doc) => {
      if (doc.data()) {
        setmainPhoto(doc.data().url);
      }
    });
   

    return unsub;
  }, []);

  useEffect(() => {
    // select a document for title aquarium
    const collectionRef = doc(
      db,
      "users",
      currentUser.uid,
      "aquarium",
      "main-title"
    );
    
    //onsnapshot method firebase

    const unsub = onSnapshot(collectionRef, (doc) => {
      if (doc.data()) {
        setTitleAqua(doc.data().title);
      }
    });
   

    return unsub;
  }, []);


  const registerNameAqua = (e) => {
    e.preventDefault();
const titleRef= doc(db,"users",currentUser.uid,'aquarium','main-title')
    setDoc(titleRef, {title:inputNameAqua},
    );
    setEditToggle(false)
  };

  return (
    
    <div className="container-dashboard-navigation ">
      <div className="title-header-dashboard">
        <h3>Bienvenue {currentUser.displayName}</h3>
      </div>
      <div className="header-dashboard">
        <img src={mainPhoto} alt="logo de aqua gest reef" />
        
        
      </div>
      <Addphoto StorageUrl={`${currentUser.uid}/images/aquarium`} RegisterUrlInFireStore={`users/${currentUser.uid}/aquarium/main-photo`}/>
      <div className="legend-header-dashboard">
          {editToggle ? (
            <>
              <input type="text" onChange={(e)=> setInputNameAqua(e.target.value)} defaultValue={inputNameAqua}/>
              <CheckIcon onClick={registerNameAqua} sx={{cursor:'pointer'}} />
              
            </>
          ) : (
            <>
              
               {titleAqua ? (<h3>{titleAqua}</h3>):(<h3>Nom de votre aquarium</h3>)}
              
              <EditIcon onClick={toggle} sx={{cursor:'pointer'}} />
            </>
          )}
        </div>
      <nav className="nav-dashboard">
        <div className="link-nav">
          <InsightsIcon />
          <Link className="link-nav-dashboard" to="/private/analyse">
            Analyse de l'eau
          </Link>
        </div>
        <div className="link-nav">
          <SetMealIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/private/cardFish"
          >
            Les fiches poissons
          </Link>
        </div>
        <div className="link-nav">
          <FavoriteBorderIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/private/mypopulation"
          >
            Ma population
          </Link>
        </div>
        <div className="link-nav">
          <CreateNewFolderIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/private/createSetup"
          >
            Ajoutez un aquarium
          </Link>
        </div>
        <div className="link-nav">
          <SaveIcon />
          <Link
            className="link-nav-dashboard"
            activeClassName="active-link-nav-dashboard"
            to="/private/setupRegister"
          >
            Mes Setups Enregistrer
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavigation;
