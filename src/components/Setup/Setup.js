import React, { useEffect, useState } from "react";
import DisplaySetupOpen from "./DisplaySetupOpen";
import SetupRegister from "./SetupRegister";

const Setup = () => {
  const [openSetup, setOpenSetup] = useState([]);
  const [id, setId] = useState([]);
  console.log(openSetup);
  console.log(openSetup[0]);


  return (
    <>
      <div className="all-container-setup">
        <SetupRegister openSetup={openSetup} setOpenSetup={setOpenSetup}  />
        <div className="container-display-one-setup">
          {openSetup.map((setup) =>
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
