import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../sass/pages/list.scss";

const productsColumns: GridColumns = [
  { field: "id", headerName: "ID" },
  {
    field: "title",
    headerName: "Title",
    renderCell: (params) => (
      <div className="cell-user">
        <img
          className="cell-user__img"
          src={params.row.img}
          alt={params.row.title}
        />
        <span className="cell-user__name">{params.row.title}</span>
      </div>
    ),
  },
  {
    field: "price",
    headerName: "Price",
    renderCell: (params) => {
      return `$${params.row.price}`;
    },
  },
  { field: "category", headerName: "Category" },
  { field: "stock", headerName: "Stock" },
];

const productsRows = [
  {
    id: 1,
    title: "Macbook pro",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    price: 1999,
    category: "computer",
    stock: 299,
  },
  {
    id: 2,
    title: "Macbook air",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    price: 1579,
    category: "computer",
    stock: 99,
  },
  {
    id: 3,
    title: "iPhone 13",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    price: 979,
    category: "smart phone",
    stock: 299,
  },
  {
    id: 4,
    title: "Asus",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    price: 979,
    category: "computer",
    stock: 399,
  },
  {
    id: 5,
    title: "Apple Watch",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    price: 979,
    category: "watch",
    stock: 299,
  },
];

const Products = () => {
  const actionsColumn = [
    {
      field: "actions",
      headerName: "Actions",
      renderCell: (params: GridRenderCellParams) => (
        <div className="cell-actions">
          <Link
            to={`products/${params.row.id}`}
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
      ),
    },
  ];

  const [rows, setRows] = useState(productsRows);

  const handleDeleting = (id: number) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  return (
    <div className="page page--list">
      <header className="header">
        <h1 className="heading">Products</h1>
        <Link className="adding" to="new">
          Add New
        </Link>
      </header>
      <DataGrid
        autoHeight={true}
        columns={productsColumns.concat(actionsColumn)}
        rows={rows}
        checkboxSelection
        pageSize={3}
        rowsPerPageOptions={[3]}
      />
    </div>
  );
};

export default Products;
