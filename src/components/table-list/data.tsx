import { DataGrid, GridColumns, GridRenderCellParams } from "@mui/x-data-grid";

interface ProductRow {
  id: number;
  title: string;
  img: string;
  price: number;
  category: string;
  stock: number;
}

interface UserRow {
  id: number;
  user: string;
  img: string;
  email: string;
  age: number;
  status: string;
}

const usersColumns: GridColumns = [
  { field: "id", headerName: "ID" },
  {
    field: "user",
    headerName: "User",
    renderCell: (params: GridRenderCellParams) => (
      <div className="cell-user">
        <img
          className="cell-user__img"
          src={params.row.img}
          alt={params.row.user}
        />
        <span className="cell-user__name">{params.row.user}</span>
      </div>
    ),
  },
  { field: "email", headerName: "Email" },
  { field: "age", headerName: "Age" },
  {
    field: "status",
    headerName: "Status",
    renderCell: (params: GridRenderCellParams) => (
      <span className={`status status--${params.row.status.toLowerCase()}`}>
        {params.row.status}
      </span>
    ),
  },
];

const usersRows: UserRow[] = [
  {
    id: 1,
    user: "Gayelord Mangan",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "gmangan0@cyberchimps.com",
    age: 29,
    status: "passive",
  },
  {
    id: 2,
    user: "Angeli Nation",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "anation1@theglobeandmail.com",
    age: 20,
    status: "active",
  },
  {
    id: 3,
    user: "Lindsay Hane",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "lhane2@over-blog.com",
    age: 32,
    status: "pending",
  },
  {
    id: 4,
    user: "Bethany Crates",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "bcrates3@gnu.org",
    age: 32,
    status: "pending",
  },
  {
    id: 5,
    user: "Giulietta Descroix",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "gdescroix4@microsoft.com",
    age: 32,
    status: "active",
  },
  {
    id: 6,
    user: "Nerty Andryushchenko",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "nandryushchenko5@blogtalkradio.com",
    age: 46,
    status: "pending",
  },
  {
    id: 7,
    user: "Reggie Battison",
    img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
    email: "rbattison6@sun.com",
    age: 37,
    status: "active",
  },
];

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

const productsRows: ProductRow[] = [
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

export type { UserRow, ProductRow };
export { usersRows, usersColumns, productsRows, productsColumns };
