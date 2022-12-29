import { useDispatch, useSelector } from "react-redux"
import {UserMenuStyled, WelcomUserStyled} from "./UserMenu.styled"
import {getUserEmail} from "../../../redux/selectors"
import {logOut} from "../../../redux/operations"

export default function UserMenu() {
const dispatch = useDispatch();
const email = useSelector(getUserEmail);


return <UserMenuStyled>
        <WelcomUserStyled>{email}</WelcomUserStyled>
        <button type="button" onClick={() => dispatch(logOut())}>Logout</button>
       </UserMenuStyled>
}