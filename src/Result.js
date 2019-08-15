import React from "react";
import styled from "styled-components";

const Message = styled.h1`
    grid-column: 1 / span 3;
    grid-row: 2 / span .5;
    color: green;
    justify-self: center;
    font-size: 4rem;
    font-family: 'Chango', cursive;

    ${props => (props.type === "win" ? `color: green` : null)}
    ${props => (props.type === "loss" ? `color: red` : null)}
    ${props => (props.type === "tie" ? `color: grey` : null)}
`

const ResetButton = styled.button`
    color: pink;
`

const Result = (props) => {
    if (props.displayMessage) {
        console.log(props.defendingMonster, props.attackingMonster);
        if (Number(props.defendingMonster.atk) > Number(props.attackingMonster.atk)){
            return(
                <Message type="win">Victory is ours!</Message>
            )
        } else if (Number(props.defendingMonster.atk) < Number(props.attackingMonster.atk)){
            return(
                <Message type="loss">Try again next time!</Message>
            )
        } else {
            return(
                <Message type="tie">So Close...</Message>
            )
        }
    } else {
        return(<h1></h1>)
    }
}

export { Result };