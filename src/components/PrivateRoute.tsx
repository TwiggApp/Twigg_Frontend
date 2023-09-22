import { Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute = ({ element, ...rest }: PrivateRouteProps) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Route {...rest} element={element} /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
