import React, { useMemo } from "react";
import {
  useGlobalFilter,
  useSortBy,
  useTable,
  usePagination,
} from "react-table";
import TableLayout from "./TableLayout";

export const TableInstance = ({ tableData }) => {
  const [columns, data] = useMemo(() => {
    const columns = [
      {
        Header: "Noms communs",
        accessor: "name",
      },
      {
        Header: "noms Latin",
        accessor: "latin",
      },     
       {
        Header: "Volume",
        accessor: "volume",
      },
      {
        Header: "Taille",
        accessor: "size",
      },
      {
        Header: "Longévité",
        accessor: "longevity",
      },
    
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Date",
        accessor: "date",
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

  return <TableLayout {...tableinstance} />;
};

export default TableInstance;