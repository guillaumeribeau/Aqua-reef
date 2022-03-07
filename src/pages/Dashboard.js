import React, { useEffect, useState, useContext } from "react";
import FishTable from "../myPopulation/table/FishTable";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { UserContext } from "../context/UserContext";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";
import LastMeasureResults from "../components/measure/LastMeasureResults";
const Dashboard = () => {
  const [population, setPopulation] = useState([]);
  const { currentUser } = useContext(UserContext);
  const [oneCardDisplay, setOneCardDisplay] = useState([]);
  
  const navigate = useNavigate();
  useEffect(() => {
    // select a collection
    const collectionRef = collection(
      db,
      "users",
      currentUser.uid,
      "MyPopulation"
    );
    // filter method firebase
    const q = query(collectionRef, orderBy("time", "desc"), limit(1000));
  
    const unsub = onSnapshot(q, (snapshot) => {
  
      setPopulation(
        snapshot.docs.map((doc) => ({
          ...doc.data().fishCard,
          id: doc.id,
        }))
      );
    });
    return unsub;
  }, []);

  // delete row fish in tableFish
  const removeRowFish = (id) => {
    deleteDoc(doc(db, "users", currentUser.uid, "MyPopulation", id));
  };

  const displayCardFishDetails = (id) => {
    const cardFishFiltered = population.filter((card) => id === card.id);
    setOneCardDisplay({ ...oneCardDisplay, cardFishFiltered });
  };

  return (
    <>
      <div className="dashboard-home-title">
        <span>Mon Aquarium</span>
        <button
          onClick={() => navigate("/private/aqua-settings")}
          className="btn"
        >
          Réglages
        </button>
      </div>
      <div className="dashboard-home-population">
        <div>Ma population</div>
        {population.length === 0 && (
          <div>
            <span>Vous n'avez pas de poissons pour l'instant ??</span>
            <button
              onClick={() => navigate("/private/cardfish")}
              className="btn"
            >
              Ajouter des poissons
            </button>
          </div>
        )}
        <FishTable
          tableData={population}
          removeRowFish={removeRowFish}
          displayCardFishDetails={displayCardFishDetails}
        />
      </div>

      <div className="dashboard-home-analyse">
        <div>Mes paramètres</div>
      
          <div>
                 <LastMeasureResults bgcolor={false}  />
         {" "}
         
            <button onClick={() => navigate("/private/analyse")} className="btn">
              Ajouter des mesures
            </button>
          </div>
        
      </div>
    </>
  );
};

export default Dashboard;
