import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { tempColor, phColor,khColor,densityColor,NH4Color,NO2Color,NO3Color,PoColor,caColor,mgColor } from "./ConstantColors";
import { UserContext } from "../../context/UserContext";
import { addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

/**
 * forms for user to register their measures
 * @components
 *
 */

function valuetext(value) {
  return `${value}°C`;
}

export default function FormsMeasure () {
  const [ph, setPh] = useState(0);
  const [kh, setKh] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [density, setDensity] = useState(0);
  const [NH4, setNH4] = useState(0);
  const [NO2, setNO2] = useState(0);
  const [NO3, setNO3] = useState(0);
  const [Po, setPo] = useState(0);
  const [Ca, setCa] = useState(0);
  const [Mg, setMg] = useState(0);
 


const {currentUser}=useContext(UserContext)
console.log(currentUser.uid);
 const date = new Date().toLocaleDateString('fr-Fr',
 { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour:'numeric', minute:'numeric' }
 );

 // essai de créer une collection user firestore:
 const registerNewMeasure= async()=>{
 const docRef = await addDoc(collection(db, "users", currentUser.uid,"measures"), {
    date,
    ph,
    kh,
    temperature,
    density,
    NH4,
    NO2,
    NO3,
    Po,
    Ca,
    Mg,
 timestamp: serverTimestamp(),
});

}
  // returns size of slider and color of label
  const customSlider = (color, backgroundLabel, ...width) => {
    const custom = {
      width: width,
      color: color,
      "& .MuiSlider-valueLabelOpen": {
        background: backgroundLabel,
      },
    };
    return custom;
  };

  return (
    <div className="container-all-measure">
      <h2>Mon relévé de mesures</h2>
      <div className="container-slider-measure">
        <div className="first-measure">
          <h3>Température:</h3>
          <Slider
            sx={customSlider(tempColor, tempColor)}
            aria-label="Restricted values"
            defaultValue={25}
            valueLabelFormat={temperature}
            step={0.1}
            valueLabelDisplay="on"
            min={25}
            max={33}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <h3>Potentiel d'hydrogène (PH):</h3>

          <Slider
            sx={customSlider(phColor, phColor)}
            aria-label="Restricted values"
            defaultValue={25}
            valueLabelFormat={ph}
            getAriaValueText={valuetext}
            step={0.1}
            valueLabelDisplay="on"
            min={0}
            max={14}
            onChange={(e) => setPh(e.target.value)}
          />

          <h3>Duretée carbonatée(KH):</h3>
          <Slider
            sx={customSlider(khColor, khColor)}
            aria-label="Restricted values"
            defaultValue={0}
            valueLabelFormat={kh}
            step={0.1}
            min={0}
            max={15}
            valueLabelDisplay="auto"
            onChange={(e) => setKh(e.target.value)}
          />

          <h3>Densité:</h3>
          <Slider
            sx={customSlider(densityColor, densityColor)}
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={density}
            getAriaValueText={valuetext}
            step={1}
            valueLabelDisplay="auto"
            min={1015}
            max={1030}
            onChange={(e) => setDensity(e.target.value)}
          />
          <h3>Ammoniac(NH4):</h3>
          <Slider
            sx={customSlider(NH4Color, NH4Color)}
            aria-label="Restricted values"
            defaultValue={25}
            valueLabelFormat={NH4}
            getAriaValueText={valuetext}
            step={0.1}
            valueLabelDisplay="on"
            min={0}
            max={14}
            onChange={(e) => setNH4(e.target.value)}
          />
        </div>
        <div className="second-measure">
          <h3>Nitrites (N02):</h3>
          <Slider
            sx={customSlider(NO2Color, NO2Color)}
            aria-label="Restricted values"
            defaultValue={0}
            valueLabelFormat={NO2}
            step={0.1}
            min={0}
            max={15}
            valueLabelDisplay="auto"
            onChange={(e) => setNO2(e.target.value)}
          />

          <h3>Nitrates (NO3):</h3>
          <Slider
            sx={customSlider(NO3Color, NO3Color)}
            aria-label="Restricted values"
            defaultValue={25}
            valueLabelFormat={NO3}
            step={0.1}
            valueLabelDisplay="on"
            min={25}
            max={33}
            onChange={(e) => setNO3(e.target.value)}
          />

          <h3>Phosphates (Po):</h3>
          <Slider
            sx={customSlider(PoColor, PoColor)}
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={Po}
            getAriaValueText={valuetext}
            step={1}
            valueLabelDisplay="auto"
            min={1015}
            max={1030}
            onChange={(e) => setPo(e.target.value)}
          />
          <h3>Calcium (Ca):</h3>
          <Slider
            sx={customSlider(caColor, caColor)}
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={Ca}
            getAriaValueText={valuetext}
            step={1}
            valueLabelDisplay="auto"
            min={1015}
            max={1030}
            onChange={(e) => setCa(e.target.value)}
          />
          <h3>Magnesium (Mg):</h3>
          <Slider
            sx={customSlider(mgColor, mgColor)}
            aria-label="Restricted values"
            defaultValue={20}
            valueLabelFormat={Mg}
            getAriaValueText={valuetext}
            step={1}
            valueLabelDisplay="auto"
            min={1015}
            max={1030}
            onChange={(e) => setMg(e.target.value)}
          />
        </div>
      </div>
      <div className="container-display-measure-before-validation">
        <div className="left-measure-before-validation">
          <div
            className="display-measure"
            style={{ color: tempColor, borderColor: tempColor }}
          >
            T:{temperature}°C
          </div>
          <div
            className="display-measure"
            style={{ color: phColor, borderColor: phColor }}
          >
            ph:{ph}
          </div>
          <div
            className="display-measure"
            style={{ color: khColor, borderColor: khColor }}
          >
            kh:{kh}°dh
          </div>
          <div
            className="display-measure"
            style={{ color: densityColor, borderColor: densityColor }}
          >
            D:{density}
          </div>
          <div
            className="display-measure"
            style={{ color: NH4Color, borderColor: NH4Color }}
          >
            NH4:{NH4}mg/L
          </div>
        </div>
        <div className="right-measure-before-validation ">
          <div
            className="display-measure"
            style={{ color: NO2Color, borderColor: NO2Color }}
          >
            N02:{NO2}mg/L
          </div>
          <div
            className="display-measure"
            style={{ color: NO3Color, borderColor: NO3Color }}
          >
            N03:{NO3}mg/L
          </div>
          <div
            className="display-measure"
            style={{ color: PoColor, borderColor: PoColor }}
          >
            Po:{Po}mg/L
          </div>
          <div
            className="display-measure"
            style={{ color: caColor, borderColor: caColor }}
          >
            Ca:{Ca}mg/L
          </div>
          <div
            className="display-measure"
            style={{ color: mgColor, borderColor: mgColor }}
          >
            Mg:{Mg}mg/L
          </div>
        </div>
      </div>
      <button onClick={registerNewMeasure}>Enregistrer les mesures</button>
    </div>
  );
}
