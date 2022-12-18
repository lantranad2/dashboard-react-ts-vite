const user: InfoData = {
  name: "John Doe",
  email: "janedoe@gmail.com",
  phone: "+123456789",
  address: "Elton St. 234 Garden Yd. New York",
  country: "USA",
};

const product: InfoData = {
  name: "Macbook pro",
  price: 1999,
  category: "computer",
  stock: "in stock",
};

interface User {
  name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
}

interface Product {
  name: string;
  price: number;
  category: string;
  stock: string;
}

type InfoData = User | Product;

export type { InfoData };
export { user, product };
