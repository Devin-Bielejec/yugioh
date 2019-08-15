import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
    grid-column: 1 / span 1;
`
const AttackingCard = (props) => {

    if (props.attackingMonster) {
        const cardImages = props.attackingMonster["card_images"];
        const chosenCardImage = cardImages[Math.floor(Math.random()*cardImages.length)];
        const imgSrc = chosenCardImage["image_url"];

        return (
            <GridItem type="attacking" attack={props.attackingMonster.atk}>
                <img src={imgSrc}>
                </img>
            </GridItem>
        )
    } else {
        return (
            <h3>Loading...</h3>
        )
    }


}

export { AttackingCard };