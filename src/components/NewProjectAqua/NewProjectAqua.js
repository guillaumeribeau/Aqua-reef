import React, { useContext } from 'react';
import DragAndDrop from './DragAndDrop';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { UserContext } from '../../context/UserContext';
import MobileProjectAqua from './MobileProjectAqua';



const NewProjectAqua = () => {
    const {mobile}= useContext(UserContext)


    return (
<DndProvider backend={HTML5Backend}>
        <div>
           {mobile.hamburger ?
        (<MobileProjectAqua/>):( <DragAndDrop/>)   
        }
           
        </div>
        </DndProvider>
    );
};

export default NewProjectAqua;