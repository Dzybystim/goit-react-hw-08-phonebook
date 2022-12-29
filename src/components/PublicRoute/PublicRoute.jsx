import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from "../../redux/selectors"
import { useSelector } from "react-redux";


export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}