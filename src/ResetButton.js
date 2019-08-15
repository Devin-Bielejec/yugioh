import React from "react";
import styled from "styled-components";

const Reset = styled.button`
    grid-column: 1 / span 3;
    grid-row: 2 / span .5;
`


const ResetButton = (props) => {
    if (props.displayMessage){
        return (
            <Reset>Reset</Reset>
        )
    } else {
        return (
            <h1></h1>
        )
    }
}

export { ResetButton };