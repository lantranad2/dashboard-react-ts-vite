import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <List /> },
  { path: "/users/:userId", element: <Single /> },
  { path: "/users/new", element: <New /> },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
