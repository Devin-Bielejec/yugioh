import React from "react";
import styled from "styled-components";

const Message = styled.h1`
    color: green;

    ${props => (props.type === "win" ? `color: green` : null)}
    ${props => (props.type === "loss" ? `color: red` : null)}
    ${props => (props.type === "tie" ? `color: grey` : null)}
`


const Result = (props) => {
    if (props.showDefendingMonster) {
        if (props.defendingMonster.atk > props.attackingMonster.atk){
            return(
                <Message type="win">Victory is yours!</Message>
            )
        } else if (props.defendingMonster.atk < props.attackingMonster.atk){
            return(
                <Message type="loss">Try again next time!</Message>
            )
        } else {
            return(
                <Message type="tie">You have to draw again...</Message>
            )
        }
    } else {
        return(<h1></h1>)
    }
}

export { Result };