import React, { useEffect, useState } from "react";
import DisplaySetupOpen from "./DisplaySetupOpen";
import SetupRegister from "./SetupRegister";

const Setup = () => {
  const [openSetup, setOpenSetup] = useState([]);
  const [oneFilter, setOneFilter]=useState([])
  const [id, setId] = useState([]);
  console.log(openSetup);
  console.log(oneFilter);



const closeSetup = () => {
  setOneFilter([])
}

  return (
    <>
      <div className="all-container-setup">
        <SetupRegister openSetup={openSetup} setOpenSetup={setOpenSetup} oneFilter={oneFilter} setOneFilter={setOneFilter}  />
        <div className="container-display-one-setup">
          {oneFilter.map((setup) =>
            setup.aquaBoard.map((set) => {
              return (
                <DisplaySetupOpen
                  src={set.src}
                  title={set.title}
                  alt={set.alt}
                />
              );
            })
          )}
        </div>
        <button className='btn-close-setup' onClick={closeSetup}>Fermer le setup</button>
      </div>
    </>
  );
};

export default Setup;
