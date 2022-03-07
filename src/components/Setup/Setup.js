import React, { useEffect, useState } from "react";
import DisplaySetupOpen from "./DisplaySetupOpen";
import SetupRegister from "./SetupRegister";

const Setup = () => {
  const [openSetup, setOpenSetup] = useState([]);
  const [oneFilter, setOneFilter] = useState([]);
  const [id, setId] = useState([]);
  console.log(openSetup);
  console.log(oneFilter);

 

  return (
    <>
    
      <div className="all-container-setup">
        <h1>Mes Setups enregistrer</h1>
        <SetupRegister
          openSetup={openSetup}
          setOpenSetup={setOpenSetup}
          oneFilter={oneFilter}
          setOneFilter={setOneFilter}
        />
      
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
      </div>
    </>
  );
};

export default Setup;
