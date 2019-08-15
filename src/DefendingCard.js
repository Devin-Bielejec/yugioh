import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
    grid-column: 3 / span 1;
`

const DefendingCard = (props) => {

    if (props.showDefendingMonster == true) {
        console.log(props.defendingMonster);
        const defendingMonster = props.defendingMonster;
        const cardImages = defendingMonster["card_images"];
        const chosenCardImage = cardImages[Math.floor(Math.random()*cardImages.length)];
        const imgSrc = chosenCardImage["image_url"];
        
        return (
            <GridItem type="defending" attack={defendingMonster.atk} onLoad={setTimeout(()=>props.setDisplayMessage(true),1000)}>
                <img src={imgSrc} >
                </img>
            </GridItem>
        )
    } else {
        return (
            <h3>Loading...</h3>
        )
    }


}

export { DefendingCard };