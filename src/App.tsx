import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateProfile from "./pages/CreateProfile";
// import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const router = createBrowserRouter([
  { path: "", element: <Home /> },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
  { path: "/create-profile", element: <CreateProfile /> },
]);

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
