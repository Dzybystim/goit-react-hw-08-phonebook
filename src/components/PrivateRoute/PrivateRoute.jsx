import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from "../../redux/selectors"
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = !isLoggedIn
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}