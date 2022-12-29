import {AppBarStyled} from "./AppBar.styled"
import Navigation from "./Navigation/Navigation"
import AuthNav from "./AuthNav/AuthNav"
import UserMenu from "./UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../redux/selectors"

export default function AppBar({setOpen}) {
const isLoggedIn = useSelector(getIsLoggedIn)

    return <AppBarStyled>
             <Navigation />
             {isLoggedIn ? <UserMenu /> : <AuthNav setOpen={setOpen}/>}
          </AppBarStyled>
}