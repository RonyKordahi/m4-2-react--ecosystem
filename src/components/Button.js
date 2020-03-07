import React from "react";
import styled from "styled-components";

const StyledButton = styled.button `
    border-radius: 7px;
    color: white;
    background-color: blue;
    padding: 10px 30px;
    border: 0px;
    font-size: 1.5em;
`

function Button({ fruit }) {
    
    if (fruit.quantity) {
        return <StyledButton>${fruit.price} - Buy now!</StyledButton>
    }
    else {
        return <StyledButton>Out of stock :(</StyledButton>
    }

    return <p>the test</p>
}

export default Button;