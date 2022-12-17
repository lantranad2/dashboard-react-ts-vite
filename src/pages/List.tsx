// import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";
// import { useState } from "react";
// import { Link, useResolvedPath } from "react-router-dom";
// import "../sass/pages/list.scss";

// interface ProductRow {
//   id: number;
//   title: string;
//   img: string;
//   price: number;
//   category: string;
//   stock: number;
// }

// const productsColumns: GridColumns = [
//   { field: "id", headerName: "ID", flex: 1 },
//   { field: "title", headerName: "Title", flex: 1 },
//   { field: "price", headerName: "Price", flex: 1 },
//   { field: "category", headerName: "Category", flex: 1 },
//   { field: "stock", headerName: "Stock", flex: 1 },
// ];

// const productsRows: ProductRow[] = [
//   {
//     id: 1,
//     title: "Macbook pro",
//     img: "https://unsplash.com/photos/fhmRqhD_dYg",
//     price: 1999,
//     category: "computer",
//     stock: 299,
//   },
// ];

// interface UserRow {
//   id: number;
//   user: string;
//   img: string;
//   email: string;
//   age: number;
//   status: string;
// }

// const usersColumns: GridColumns = [
//   { field: "id", headerName: "ID", flex: 1 },
//   {
//     field: "user",
//     headerName: "User",
//     flex: 5,
//     renderCell: (params: GridRenderCellParams) => (
//       <div className="cell-user">
//         <img
//           className="cell-user__img"
//           src={params.row.img}
//           alt={params.row.user}
//         />
//         <span className="cell-user__name">{params.row.user}</span>
//       </div>
//     ),
//   },
//   { field: "email", headerName: "Email", flex: 6 },
//   { field: "age", headerName: "Age", flex: 1 },
//   {
//     field: "status",
//     headerName: "Status",
//     flex: 2,
//     renderCell: (params: GridRenderCellParams) => (
//       <span className={`status status--${params.row.status.toLowerCase()}`}>
//         {params.row.status}
//       </span>
//     ),
//   },
// ];

// const usersRows: UserRow[] = [
//   {
//     id: 1,
//     user: "Gayelord Mangan",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "gmangan0@cyberchimps.com",
//     age: 29,
//     status: "passive",
//   },
//   {
//     id: 2,
//     user: "Angeli Nation",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "anation1@theglobeandmail.com",
//     age: 20,
//     status: "active",
//   },
//   {
//     id: 3,
//     user: "Lindsay Hane",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "lhane2@over-blog.com",
//     age: 32,
//     status: "pending",
//   },
//   {
//     id: 4,
//     user: "Bethany Crates",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "bcrates3@gnu.org",
//     age: 32,
//     status: "pending",
//   },
//   {
//     id: 5,
//     user: "Giulietta Descroix",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "gdescroix4@microsoft.com",
//     age: 32,
//     status: "pending",
//   },
//   {
//     id: 6,
//     user: "Nerty Andryushchenko",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "nandryushchenko5@blogtalkradio.com",
//     age: 46,
//     status: "pending",
//   },
//   {
//     id: 7,
//     user: "Reggie Battison",
//     img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
//     email: "rbattison6@sun.com",
//     age: 37,
//     status: "approved",
//   },
// ];

// const List = () => {
//   let columns: GridColumns = [];
//   columns = usersColumns;
//   let rows: UserRow[] | ProductRow[] = [];
//   rows = usersRows;
//   let heading = "Add New User";
//   const actionsColumn = [
//     {
//       field: "actions",
//       headerName: "Actions",
//       flex: 3,
//       renderCell: (params: GridRenderCellParams) => (
//         <div className="cell-actions">
//           <Link
//             to={`${paths.pathname}/${params.row.id}`}
//             className="cell-actions__action cell-actions__view"
//           >
//             View
//           </Link>
//           <button
//             className="cell-actions__action cell-actions__delete"
//             onClick={() => handleDeleting(params.row.id)}
//           >
//             Delete
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const paths = useResolvedPath("");
//   if (paths.pathname == "/products") {
//     columns = productsColumns;
//     rows = productsRows;
//     heading = "Add New Product";
//   }

//   const [data, setData] = useState(rows);

//   const handleDeleting = (id: number) => {
//     setData(data.filter((row) => row.id !== id));
//   };

//   return (
//     <div className="page page--list">
//       <header className="header">
//         <h1 className="heading">{heading}</h1>
//         <Link className="adding" to={`${paths.pathname}/new"`}>
//           Add New
//         </Link>
//       </header>
//       <DataGrid
//         autoHeight={true}
//         columns={columns.concat(actionsColumn)}
//         rows={data}
//         checkboxSelection
//         pageSize={3}
//         rowsPerPageOptions={[3]}
//       />
//     </div>
//   );
// };

// export default List;
export {};
