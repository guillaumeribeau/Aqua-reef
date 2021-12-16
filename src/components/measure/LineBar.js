import React, { useContext, useEffect, useState } from "react";
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
import {ArrowColor, tempColor, phColor,khColor,densityColor,NH4Color,NO2Color,NO3Color,PoColor,caColor,mgColor } from "./ConstantColors";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';

import { UserContext } from "../../context/UserContext";

const LineBar = () => {
  const ArrayOfMeasureProperties = [
    { dataKey: "temperature", stroke: tempColor },
    { dataKey: "ph", stroke: phColor },
    { dataKey: "kh", stroke: khColor },
    { dataKey: "density", stroke: densityColor },
    { dataKey: "NH4", stroke: NH4Color },
    { dataKey: "NO2", stroke: NO2Color },
    { dataKey: "NO3", stroke: NO3Color },
    { dataKey: "Po", stroke: PoColor },
    { dataKey: "Ca", stroke: caColor },
    { dataKey: "Mg", stroke: mgColor },
  ];

  const [measureData, setMeasureData] = useState([]);
  const [currentData, setCurrentData] = useState(0);
  const length = ArrayOfMeasureProperties.length;
  const {currentUser}= useContext(UserContext)

  const prevMeasure = () => {
    setCurrentData(currentData === 0 ? length - 1 : currentData - 1);
  };

  const nextMeasure = () => {
    setCurrentData(currentData === length - 1 ? 0 : currentData + 1);
  };

  console.log(currentData);

  
  useEffect(() => {
    // select a collection
    const collectionRef = collection(db, "users", currentUser.uid, "measures");
    // filter method firebase
    const q = query(collectionRef, orderBy("timestamp", "desc"), limit(15));
    console.log(q);
    const unsub = onSnapshot(q, (snapshot) =>
      setMeasureData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      )
    );

    return unsub;
  }, []);

  return (
    
      <>
      <div className='container-graphique active'>
        <span className='title-graphique'>Graphique des relevés</span>
       <LineChart
         width={500}
         height={200}
        data={measureData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* <Line
          type="monotone"
          dataKey="kh"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        /> */}
        {ArrayOfMeasureProperties.map(
          (slide, index) =>
            index === currentData && (
              <Line
              isAnimationActive={true}
                type="monotone"
                dataKey={slide.dataKey}
                stroke={slide.stroke}
              />
            )
        )}
      </LineChart>
  <ArrowCircleLeftOutlinedIcon  sx={{fontSize:'34px', cursor:'pointer', color: ArrowColor, position:'absolute',left:'32px',bottom:'15px' }} onClick={prevMeasure}/>
  <ArrowCircleRightOutlinedIcon sx={{fontSize:'34px', cursor:'pointer',color: ArrowColor, position:'absolute',right:'32px',bottom:'15px' }}onClick={nextMeasure}/>
  
 </div>
    </>
  );
};

export default LineBar;
