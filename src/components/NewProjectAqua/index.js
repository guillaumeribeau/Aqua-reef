import React from 'react';
import DragAndDrop from './DragAndDrop';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



const index = () => {
    return (
<DndProvider backend={HTML5Backend}>
        <div>
            <DragAndDrop/>
        </div>
        </DndProvider>
    );
};

export default index;