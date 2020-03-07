import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.span `
    display: flex;
    justify-content: space-around;
    position: absolute;
    right: 0;
    top: 35px;
    .link {
        padding: 0px 20px;
    }
    a {
        text-decoration: none;
        color: blue;
    }
`

function Header() {
    return <div><h1>Fruits Emporium</h1>
    <StyledLink><div className="link"><Link to="/">Home</Link></div>
    <div className="link"><Link to="/about">About</Link></div></StyledLink>
    </div>;
}

export default Header;