import { useDispatch, useSelector } from "react-redux"
import {UserMenuStyled, WelcomUserStyled, StyledButton} from "./UserMenu.styled"
import {getUserEmail} from "../../../redux/selectors"
import {logOut} from "../../../redux/operations"

export default function UserMenu() {
const dispatch = useDispatch();
const email = useSelector(getUserEmail);


return <UserMenuStyled>
        <WelcomUserStyled>{email}</WelcomUserStyled>
        <StyledButton type="button" onClick={() => dispatch(logOut())}>Logout</StyledButton>
       </UserMenuStyled>
}