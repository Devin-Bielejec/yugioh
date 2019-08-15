import React from "react";
import styled from "styled-components";

const GridItem = styled.div`
    grid-column: 2 / span 1;
`

const BeautifulButton = styled.button`
    border: 4px solid black;
    background: white;
    color: black;
    font-size: 3rem;
    margin: 20%;
    border-radius: 50px;

    :hover{
        color: red;
    }
    
    

`
const HOTCButton = (props) => {
    const drawCard = props.drawCard;
    const monstersDefend = props.monsters;

    return (
        <GridItem>
            <BeautifulButton onClick={() => {
                console.log(monstersDefend);
                drawCard(monstersDefend);
            }}>Heart of the Cards Guide Me!</BeautifulButton>
        </GridItem>
    )
}

export { HOTCButton };