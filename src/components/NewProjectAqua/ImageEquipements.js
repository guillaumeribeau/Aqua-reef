import React, { useState } from "react";
import { useDrag } from "react-dnd";
import DeleteIcon from "@mui/icons-material/Delete";

const ImageEquipements = ({
  alt,
  title,
  id,
  src,
  IconDelete,
  aquaBoard,
  setAquaBoard,
  picture,
}) => {
  const [deleteIconVisible, setDeleteIconVisible] = useState(IconDelete);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "div",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const deleteEquipementOnBoard = () => {
    console.log(aquaBoard);
    //  const pictureList = aquaBoard.filter(
    //     (el) => el.id !== picture.id
    //   );
    //   console.log(pictureList);
    setAquaBoard(aquaBoard.filter((el) => el.id !== picture.id));
  };
  return (
    <>
      {deleteIconVisible ? (
        <div
          key={id}
          ref={drag}
          className="image-equipement"
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <div className="container-delete">
            <span>{title}</span>
            <DeleteIcon
              onClick={deleteEquipementOnBoard}
              sx={{ fontSize: "25px", color: "black", cursor: "pointer" }}
            />
          </div>
          <img src={src} alt={alt} />
        </div>
      ) : (
        <div
          key={id}
          ref={drag}
          className="image-equipement"
          style={{ border: isDragging ? "3px solid blue" : "" }}
        >
          <span>{title}</span>
          <img src={src} alt={alt} />
        </div>
      )}
    </>
  );
};

export default ImageEquipements;
