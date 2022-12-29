import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const AuthNavStyled = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 15px;
width: 30%;
`

export const AuthNavItemStyled = styled(NavLink)`
text-decoration: none;
color: #140EED;
font-weight: bold;

:hover, focus {
    color: #0F46F7;
}
`