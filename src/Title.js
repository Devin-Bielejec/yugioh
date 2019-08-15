import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-weight: 1;
    text-align: center;
    grid-row: 1 / span 1;
    grid-column: 1 / span 3;
    justify-self: center;
`

const Title = (props) => {
    return (
        <Heading>Can you defeat the monster?</Heading>
    )
}

export { Title };