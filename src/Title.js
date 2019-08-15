import React from "react";
import styled from "styled-components";

const Heading = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-weight: 1;
`

const Title = (props) => {
    return (
        <Heading>Can you defeat the monster?</Heading>
    )
}

export default Title;