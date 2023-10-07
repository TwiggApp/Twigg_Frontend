import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useLayoutEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { authActions } from "./redux/slices/authSlice";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateProfile from "./pages/CreateProfile";
import DashboardHome from "./pages/Dashboard/Home";
import PrivateRoute from "./components/PrivateRoute";
import SidebarLayout from "./components/Layouts/SidebarLayout";
import NotPrivateRoute from "./components/NonPrivateRoute";
import Category from "./pages/Dashboard/Category";
import Foods from "./pages/Dashboard/Foods";
import RestaurantHome from "./pages/Restaurants/Home";
import "./App.css";

function App() {
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch(authActions.authenticateUser());
    }
  }, [dispatch]);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/restaurants/:restaurantId" element={<RestaurantHome />} />
          <Route element={<NotPrivateRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create-profile" element={<CreateProfile />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<SidebarLayout />}>
              <Route index element={<DashboardHome />} />
              <Route path="categories">
                <Route index element={<Category />} />
                <Route path=":categoryId" element={<Foods />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
