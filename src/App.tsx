import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateProfile from "./pages/CreateProfile";
import "./App.css";

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/create-profile", element: <CreateProfile /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
