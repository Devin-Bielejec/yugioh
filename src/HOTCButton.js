import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
    grid-column: 2 / span 1;
`
const HOTCButton = (props) => {
    const drawCard = props.drawCard;
    const monstersDefend = props.monsters;

    return (
        <GridItem>
            <button onClick={() => {
                console.log(monstersDefend);
                drawCard(monstersDefend);
            }}>Heart Of the Cards Guide Me!</button>
        </GridItem>
    )
}

export { HOTCButton };