// import React, { useContext, useEffect, useState } from "react";
// import firebase from "firebase";
// import {ArrowColor, tempColor, phColor,khColor,densityColor,NH4Color,NO2Color,NO3Color,PoColor,caColor,mgColor } from "./ConstantColors";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
// import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
// import { UidContext } from "../utils/UidContext";

// const LineBar = () => {
//   const ArrayOfMeasureProperties = [
//     { dataKey: "temperature", stroke: tempColor },
//     { dataKey: "ph", stroke: phColor },
//     { dataKey: "kh", stroke: khColor },
//     { dataKey: "density", stroke: densityColor },
//     { dataKey: "NH4", stroke: NH4Color },
//     { dataKey: "NO2", stroke: NO2Color },
//     { dataKey: "NO3", stroke: NO3Color },
//     { dataKey: "Po", stroke: PoColor },
//     { dataKey: "Ca", stroke: caColor },
//     { dataKey: "Mg", stroke: mgColor },
//   ];

//   const [measureData, setMeasureData] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const length = ArrayOfMeasureProperties.length;
//   const uid = useContext(UidContext)

//   const prevMeasure = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   const nextMeasure = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   console.log(current);

//   useEffect(() => {
//     const measureDB = firebase.database().ref("tank-measure");

//     measureDB.on("value", (snapshot) => {
//       let measure = snapshot.val();
  
//       let allMeasure = [];
//       for (let id in measure) {
//         console.log(id);
//         allMeasure.push({ id, ...measure[id] });
//       }
//      const test= allMeasure.map(uid=>uid.uid)
//      console.log(test);
  
    
//       setMeasureData(allMeasure);
//     });
//   }, []);

//   return (
    
//       <>
//       <div className='container-graphique active'>
//         <span className='title-graphique'>Graphique des relevés</span>
//        <LineChart
//          width={500}
//          height={200}
//         data={measureData}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         {/* <Line
//           type="monotone"
//           dataKey="kh"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         /> */}
//         {ArrayOfMeasureProperties.map(
//           (slide, index) =>
//             index === current && (
//               <Line
//               isAnimationActive={true}
//                 type="monotone"
//                 dataKey={slide.dataKey}
//                 stroke={slide.stroke}
//               />
//             )
//         )}
//       </LineChart>
//   <ArrowCircleLeftOutlinedIcon  sx={{fontSize:'34px', cursor:'pointer', color: ArrowColor, position:'absolute',left:'32px',bottom:'15px' }} onClick={prevMeasure}/>
//   <ArrowCircleRightOutlinedIcon sx={{fontSize:'34px', cursor:'pointer',color: ArrowColor, position:'absolute',right:'32px',bottom:'15px' }}onClick={nextMeasure}/>
  
//  </div>
//     </>
//   );
// };

// export default LineBar;
