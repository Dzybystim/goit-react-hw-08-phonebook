import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from "../../redux/selectors"
import { useSelector } from "react-redux";


export const PublicRoute = ({ component: Component, redirectTo = '/' , openModal}) => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return isLoggedIn|| !openModal ? <Navigate to={redirectTo} /> : Component;
}