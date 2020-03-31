import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { items } from "../data";

let fruits = (Object.values(items));

const StyledContainer = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const StyledDiv = styled.div `
    display: flex;
    text-align: center;
    justify-content: center;
    width: 250px;
    margin: 20px 30px;
    box-shadow: 0px 0px 5px 2px whitesmoke;
    border-radius: 5px;

    a {
        text-decoration: none;
        color: black;
    }
`

const StyledImg = styled.img `
    height: 150px;
    border-radius: 5px;
    position: relative;
`;

const StyledP = styled.p `
    font-weight: bold;
`;

const StyledLine = styled.hr `
    color: grey;
    max-width: 50px;
    border-radius: 5px;
    border: solid 1px grey;
`;

const StyledLatin = styled.p `
    color: lightgray;
    font-style: italic;
`

function ListingGrid() {
    return <StyledContainer>
        {fruits.map(fruit => {
            return <StyledDiv key={fruit.id}>
                        <Link to={`/items/${fruit.id}`}>
                            <div>
                                    <StyledImg src={fruit.imageSrc} alt={fruit.name} className="fruitPic"></StyledImg>
                                    <StyledP>{fruit.name}</StyledP>
                                    <StyledLine></StyledLine>
                                    <StyledLatin>{fruit.latinName}</StyledLatin>
                            </div>
                        </Link>
                    </StyledDiv>
        })}
    </StyledContainer>;
}

export default ListingGrid;