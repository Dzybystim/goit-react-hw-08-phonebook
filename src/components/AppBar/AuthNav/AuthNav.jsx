import {AuthNavStyled, AuthNavItemStyled} from "./AuthNav.styled"


export default function AuthNav() {
    return <AuthNavStyled>
    <AuthNavItemStyled to="/register">Register</AuthNavItemStyled>
    <AuthNavItemStyled to="/login">Login</AuthNavItemStyled>
           </AuthNavStyled>
}