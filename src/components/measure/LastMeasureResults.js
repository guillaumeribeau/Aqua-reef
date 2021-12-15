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
  onSnapshot,
  query,
} from "firebase/firestore";
import { auth, db } from "../../firebase/firebaseConfig";
import { getDatabase, ref, child, get } from "firebase/database";
import { UserContext } from "../../context/UserContext";
import { SettingsBackupRestoreSharp } from "@mui/icons-material";

const LastMeasureResults = () => {
  const { currentUser } = useContext(UserContext);
  const [lastMeasure, setLastMeasure] = useState([]);

  useEffect(() => {
    onSnapshot(
      collection(db, "users", currentUser.uid, "measures"),

      (querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          
          const allMeasure = [];
          await allMeasure.push(doc.data());
          console.log(allMeasure);
          const measure = allMeasure[allMeasure.length - 1];
          setLastMeasure(measure);
        });
      }
    );

    console.log(lastMeasure);
  }, []);

  return (
    <div className="container-results-measure">
      <h3>Analyse du 15 sept 2021</h3>
      <h4>Dernière analyse</h4>
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
            <span>{lastMeasure.temperature}°C</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: phColor }}>Ph</Avatar>
            <span>{lastMeasure.ph}</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: khColor }}>Kh</Avatar>
            <span>{lastMeasure.kh}°dh</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: densityColor }}>D</Avatar>
            <span>{lastMeasure.density}</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: NH4Color }}>NH4</Avatar>
            <span>{lastMeasure.NH4}mg/L</span>
          </div>
        </Stack>

        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          spacing={2}
        >
          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: NO2Color }}>NO2</Avatar>
            <span>{lastMeasure.NO2}mg/L</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: NO3Color }}>NO3</Avatar>
            <span>{lastMeasure.NO3}mg/L</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: PoColor }}>Po</Avatar>
            <span>{lastMeasure.Po}mg/L</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: caColor }}>Ca</Avatar>
            <span>{lastMeasure.Ca}mg/L</span>
          </div>

          <div className="container-icon-measure">
            <Avatar sx={{ bgcolor: mgColor }}>Mg</Avatar>
            <span>{lastMeasure.Mg}mg/L</span>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default LastMeasureResults;
