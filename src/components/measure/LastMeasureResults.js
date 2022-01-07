import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  tempColor,
  phColor,
  khColor,
  densityColor,
  NH4Color,
  NO2Color,
  NO3Color,
  PoColor,
  caColor,
  mgColor,
} from "./ConstantColors";
import Divider from "@mui/material/Divider";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";

import { UserContext } from "../../context/UserContext";


const LastMeasureResults = () => {
  const { currentUser } = useContext(UserContext);
  const [lastMeasure, setLastMeasure] = useState([]);

  useEffect(() => {
    // select a collection
    const collectionRef = collection(db, "users", currentUser.uid, "measures");
    // filter method firebase
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(1));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) =>
      setLastMeasure(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );

    return unsub;
  }, []);

  
  return (
    <>
      {lastMeasure[0] && (
        <div className="container-results-measure">
          <h3>Dernière analyse</h3>
          <h4>{lastMeasure[0].date}</h4>
          <div className="results-measure">
            <Stack
              sx={{
                marginRight: 10,
              }}
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: tempColor }}>T</Avatar>
                <span>{lastMeasure[0].temperature}°C</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: phColor }}>Ph</Avatar>
                <span>{lastMeasure[0].ph}</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: khColor }}>Kh</Avatar>
                <span>{lastMeasure[0].kh}°dh</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: densityColor }}>D</Avatar>
                <span>{lastMeasure[0].density}</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: NH4Color }}>NH4</Avatar>
                <span>{lastMeasure[0].NH4}mg/L</span>
              </div>
            </Stack>

            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: NO2Color }}>NO2</Avatar>
                <span>{lastMeasure[0].NO2}mg/L</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: NO3Color }}>NO3</Avatar>
                <span>{lastMeasure[0].NO3}mg/L</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: PoColor }}>Po</Avatar>
                <span>{lastMeasure[0].Po}mg/L</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: caColor }}>Ca</Avatar>
                <span>{lastMeasure[0].Ca}mg/L</span>
              </div>

              <div className="container-icon-measure">
                <Avatar sx={{ bgcolor: mgColor }}>Mg</Avatar>
                <span>{lastMeasure[0].Mg}mg/L</span>
              </div>
            </Stack>
          </div>
        </div>
      )}
    </>
  );
};

export default LastMeasureResults;
