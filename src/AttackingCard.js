import React from "react";

const AttackingCard = (props) => {
    console.log(props.monsters);
    const chosenMonster = props.monsters[Math.floor(Math.random()*props.monsters.length)];
    const cardImages = chosenMonster["card_images"];
    const chosenCardImage = cardImages[Math.floor(Math.random()*cardImages.length)];
    const imgSrc = chosenCardImage["image_url"];

    return (
        <div attack={chosenMonster.atk}>
            <img src={imgSrc}>
            </img>
        </div>
    )
}

export default AttackingCard;