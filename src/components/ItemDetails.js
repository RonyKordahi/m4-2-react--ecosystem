import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { items, sellers } from "../data";
import Button from "./Button";

let fruits = (Object.values(items));

const StyledContainer = styled.div `
    display: flex;
    justify-content: center;

    div {
        margin: 100px 30px 0px 50px;
    }

    .name {
        font-size: 1.5em;
    }

    .bold {
        font-weight: bold;
    }

    .italic {
        font-style: italic;
        margin-bottom: 10px;
    }

    .grey {
        color: lightgray;
    }

    .profile {
        border-radius: 50px;
        height: 40px;
    }

    .paragraph {
        display: flex;

        .sellerInfo {
            margin-top: 10px;
            margin-left: 10px;
        }
    }
`

const StyledImg = styled.img `
    height: 250px;
    border-radius: 15px;
`

function ItemDetails() {
    const { itemID } = useParams();
    const fruit = fruits.filter(fruit => fruit.id === itemID);

    return <div>
    {fruit.map(fruit => {
            console.log(sellers);
        return <StyledContainer>
                <div>
                <StyledImg src={fruit.imageSrc} alt="fruit"></StyledImg>
                </div>
                <div>
                    <span className="bold name">{fruit.name}</span>
                    <p className="italic grey">{fruit.latinName}</p>
                    <p>{fruit.description}</p>
                    <p className="italic">Product of <span className="bold">{fruit.countryOfOrigin}</span></p>
                    <Button fruit={fruit}></Button>
                    <p className="paragraph">
                        <img className="profile" src={sellers[fruit.sellerId].avatarSrc}></img>
                        <span className="sellerInfo">Sold by: <span className="bold">{sellers[fruit.sellerId].storeName}</span></span>
                    </p>
                </div>
            </StyledContainer>;
    })}
    </div>;
}

export default ItemDetails;