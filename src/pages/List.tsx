import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  usersColumns,
  usersRows,
  productsRows,
  productsColumns,
  UserRow,
  ProductRow,
} from "../components/table-list/data";
import "../sass/pages/list.scss";

const List = () => {
  const location = useLocation();
  const [rows, setRows] = useState<UserRow[] | ProductRow[]>(usersRows);
  const [columns, setColumns] = useState(usersColumns);
  const [title, setTitle] = useState("Users");

  useLayoutEffect(() => {
    if (location.pathname === "/products") {
      setColumns(productsColumns);
      setRows(productsRows);
      setTitle("Products");
    } else if (location.pathname === "/users") {
      setColumns(usersColumns);
      setRows(usersRows);
      setTitle("Users");
    }
  }, [location]);

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

  const handleDeleting = (id: number) => {
    setRows((rows as any[]).filter((row) => row.id !== id));
  };

  return (
    <div className="card page page--list">
      <header className="header">
        <h1 className="heading">{title}</h1>
        <Link className="adding" to="new">
          Add New
        </Link>
      </header>
      <DataGrid
        className="grid-table"
        autoHeight={true}
        columns={columns.concat(actionsColumn)}
        rows={rows}
        checkboxSelection
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
    </div>
  );
};

export default List;
