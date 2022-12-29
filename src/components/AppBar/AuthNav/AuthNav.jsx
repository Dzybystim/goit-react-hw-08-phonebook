import {AuthNavStyled, AuthNavItemStyled} from "./AuthNav.styled"


export default function AuthNav({setOpen}) {

    return <AuthNavStyled>
    <AuthNavItemStyled to="/register" onClick={() => setOpen(true)}>Register</AuthNavItemStyled>
    <AuthNavItemStyled to="/login" onClick={() => setOpen(true)}>Login</AuthNavItemStyled>
           </AuthNavStyled>
}