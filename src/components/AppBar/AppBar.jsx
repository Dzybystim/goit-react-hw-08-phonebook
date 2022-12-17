import {AppBarStyled} from "./AppBar.styled"
import Navigation from "./Navigation/Navigation"
import AuthNav from "./AuthNav/AuthNav"
import UserMenu from "./UserMenu/UserMenu"

export default function AppBar() {

    return <AppBarStyled>
             <Navigation />
             <AuthNav />
             <UserMenu />
          </AppBarStyled>
}