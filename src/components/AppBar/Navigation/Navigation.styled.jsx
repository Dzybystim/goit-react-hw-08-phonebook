import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavigationStyled = styled.nav`
display: flex;
gap: 15px;
width: 30%;
`

export const NavigationItemStyled = styled(NavLink)`
text-decoration: none;
color: #140EED;
font-weight: bold;

:hover, focus {
    color: #0F46F7;
}
` 