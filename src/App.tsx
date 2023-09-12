import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
