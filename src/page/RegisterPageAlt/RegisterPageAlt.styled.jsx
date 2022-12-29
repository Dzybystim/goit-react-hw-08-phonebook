import styled from 'styled-components'
import { NavLink } from "react-router-dom";


export const AuthLinkStyled = styled(NavLink)`
text-decoration: none;
display: inline-flex;
align-items: center;
justify-content: center;
position: relative;
box-sizing: border-box;
font-family: "Roboto","Helvetica","Arial",sans-serif;
font-weight: 500;
font-size: 0.875rem;
line-height: 1.75;
letter-spacing: 0.02857em;
text-transform: uppercase;
min-width: 64px;
padding: 6px 16px;
border-radius: 4px;
transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
color: #fff;
background-color: #1976d2;
box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
width: 100%;
margin-top: 0;
margin-bottom: 16px;

:hover, focus {
    text-decoration: none;
    background-color: #1565c0;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

`