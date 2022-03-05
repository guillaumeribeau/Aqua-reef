import React, { useContext, useMemo } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import TableLayout from "./TableLayout";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { UserContext } from "../../context/UserContext";
export const FishTable = ({ tableData, removeRowFish,displayCardFishDetails }) => {
  const currentUser = useContext(UserContext);
  const [columns, data] = useMemo(() => {
    const columns = [
      {
        Header: "Noms communs",
        accessor: "name",
      },
      // {
      //   Header: "noms Latin",
      //   accessor: "latin",
      // },
      // {
      //   Header: "Volume",
      //   accessor: "volume",
      // },
      // {
      //   Header: "Taille",
      //   accessor: "size",
      // },
      // {
      //   Header: "Longévité",
      //   accessor: "longevity",
      // },
      {
        Header: "Image",
        accessor: "url",
        maxWidth: 70,
        minWidth: 70,
        Cell: ({ cell: { value } }) => <img src={value} width={50} />,
      },
      {
        Header: "Supprimer",
        accessor: "id",
       
        Cell: ({ cell: { value } }) => (
          <div className="container-delete-table">
          <DeleteIcon
            onClick={() => removeRowFish(value)}
            sx={{
              fontSize: "30px",
            
              cursor: "pointer",
              "&:hover": {
                color: "blue",
                fontSize: "45px",
              },
            }}
          />
        
          </div>
        ),
      },
    ];
    return [columns, tableData];
  }, [tableData]);

  const tableinstance = useTable(
    { columns, data, initialState: { pageIndex: 0, pageSize: 5 } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const removeCardFish = (id) => {
    deleteDoc(doc(db, "users", currentUser.uid, `MyPopulation/${id}`));
  };

  return <TableLayout {...tableinstance} />;
};

export default FishTable;
