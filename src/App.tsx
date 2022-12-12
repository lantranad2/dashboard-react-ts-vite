import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import List from "./pages/List";
import New from "./pages/New";
import Single from "./pages/Single";
import "./App.scss";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/users", element: <List /> },
  { path: "/users/:userId", element: <Single /> },
  { path: "/users/new", element: <New /> },
]);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
