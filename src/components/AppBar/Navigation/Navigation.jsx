import {NavigationStyled, NavigationItemStyled} from "./Navigation.styled"
import { useSelector } from "react-redux"
import {getIsLoggedIn} from "../../../redux/selectors"

export default function Navigation() {
const isLoggedIn = useSelector(getIsLoggedIn)

return <NavigationStyled>
    <NavigationItemStyled to="/">Main page</NavigationItemStyled>
    {isLoggedIn && <NavigationItemStyled to="/contacts">List contacts</NavigationItemStyled>}
    </NavigationStyled>
}