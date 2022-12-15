interface HeadingType {
  id: string;
  product: string;
  customer: string;
  date: string;
  amount: string;
  payment: string;
  status: string;
}

const transactionsHeading: HeadingType = {
  id: "Tracking ID",
  product: "Product",
  customer: "Customer",
  date: "Date",
  amount: "Amount",
  payment: "Payment Method",
  status: "Status",
};

interface Product {
  img: string;
  name: string;
}

type Payment = "Cash on Delivery" | "Online";
type Status = "Approved" | "Pending" | "Declined";

interface Transaction {
  id: number;
  product: Product;
  customer: string;
  date: Date;
  amount: number;
  payment: Payment;
  status: Status;
}

const transactions: Transaction[] = [
  {
    id: 1143155,
    product: {
      img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
      name: "Acer Nitro 5",
    },
    customer: "John Smith",
    date: new Date("2022-2-1"),
    amount: 785,
    payment: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 2235235,
    product: {
      img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
      name: "Playstation 5",
    },
    customer: "Michael Doe",
    date: new Date("2022-3-2"),
    amount: 900,
    payment: "Online",
    status: "Pending",
  },
  {
    id: 2342353,
    product: {
      img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
      name: "Redragon S101",
    },
    customer: "John Smith",
    date: new Date("2022-3-4"),
    amount: 35,
    payment: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 2357741,
    product: {
      img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
      name: "Razer Blade 15",
    },
    customer: "Jane Smith",
    date: new Date("2022-1-4"),
    amount: 920,
    payment: "Online",
    status: "Approved",
  },
  {
    id: 2342355,
    product: {
      img: "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=100",
      name: "ASUS ROG Strix",
    },
    customer: "Harold Carol",
    date: new Date("2022-7-4"),
    amount: 2000,
    payment: "Online",
    status: "Declined",
  },
];

export type { Transaction };
export { transactions };
