interface NewInput {
  id: number;
  label: string;
  placehoder: string;
  type: "text" | "number" | "email" | "password" | "phone";
}

const usersNew: NewInput[] = [
  {
    id: 1,
    label: "Name and surname",
    placehoder: "John Doe",
    type: "text",
  },
  {
    id: 2,
    label: "Phone",
    placehoder: "+123456789",
    type: "phone",
  },
  {
    id: 3,
    label: "Address",
    placehoder: "Elton St.216 New York",
    type: "text",
  },
  {
    id: 4,
    label: "Username",
    placehoder: "john_doe",
    type: "text",
  },
  {
    id: 5,
    label: "Email",
    placehoder: "john_doe@gmail.com",
    type: "email",
  },
  {
    id: 6,
    label: "Password",
    placehoder: "",
    type: "password",
  },
  {
    id: 7,
    label: "Country",
    placehoder: "USA",
    type: "text",
  },
];

const productsNew: NewInput[] = [
  {
    id: 1,
    label: "Description",
    placehoder: "This product is good",
    type: "text",
  },
  {
    id: 2,
    label: "Price",
    placehoder: "100",
    type: "number",
  },
  {
    id: 3,
    label: "Title",
    placehoder: "Apple Macbook pro",
    type: "text",
  },
  {
    id: 4,
    label: "Category",
    placehoder: "Computers",
    type: "text",
  },
  {
    id: 5,
    label: "Stock",
    placehoder: "in stock",
    type: "text",
  },
];

export { usersNew, productsNew };
