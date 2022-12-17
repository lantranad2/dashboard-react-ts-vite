import React, { useState } from "react";
import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { ProductRow, UserRow } from "./data";

interface TableListProps {
  rows: UserRow[] | ProductRow[];
  columns: GridColumns;
}

const TableList: React.FC<TableListProps> = ({ rows, columns }) => {
  const actionsColumn: GridColumns = [
    {
      field: "actions",
      headerName: "Actions",
      renderCell: function (params: GridRenderCellParams) {
        return (
          <div className="cell-actions">
            <Link
              to={`${params.row.id}`}
              className="cell-actions__action cell-actions__view"
            >
              View
            </Link>
            <button
              className="cell-actions__action cell-actions__delete"
              onClick={() => handleDeleting(params.row.id)}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  const [data, setData] = useState(rows);

  const handleDeleting = (id: number) => {
    setData((rows as any[]).filter((row) => row.id !== id));
  };

  return (
    <DataGrid
      autoHeight={true}
      columns={columns.concat(actionsColumn)}
      rows={data}
      checkboxSelection
      pageSize={3}
      rowsPerPageOptions={[3]}
    />
  );
};

export default TableList;
