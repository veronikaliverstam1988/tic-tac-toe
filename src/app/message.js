/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';



export default function Message(props) {

    let currentMessage;
    const gameMessage = {

        player1: "Player 1's turn",
        player2: "Player 2's turn",
        player1Won: "1st player won",
        player2Won: "2nd player won",
        draw: "Game over"

    };

    if (props.showCurrentGameMessage.winner === 1 || props.showCurrentGameMessage.winner === 2) {
        if(props.showCurrentGameMessage.winner === 0) {
            currentMessage = gameMessage.player1Won
        } else {
            currentMessage = gameMessage.player2Won
        }
    }

    else if (props.showCurrentGameMessage.board.includes(0) === false) {
        currentMessage = gameMessage.draw
    }
    else {
        if (props.showCurrentGameMessage.player === 'plr1') {
            currentMessage = gameMessage.player1
        }
        else {
            currentMessage = gameMessage.player2
        }
    }

    return (
        <div>
            {currentMessage}
        </div>
    )};