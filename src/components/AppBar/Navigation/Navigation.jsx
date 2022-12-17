import {NavigationStyled, NavigationItemStyled} from "./Navigation.styled"



export default function Navigation() {
return <NavigationStyled>
    <NavigationItemStyled to="/">Main page</NavigationItemStyled>
    <NavigationItemStyled to="/contacts">List contacts</NavigationItemStyled>
    </NavigationStyled>
}