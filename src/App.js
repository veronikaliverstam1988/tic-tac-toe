import React from 'react';

import {makeMove, newGame} from '../logic';

import Message from './message';
import Tile from './tile';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/
/*
export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            game: newGame()
        };
    }
  render(){
    return (
        <div className="container">

            <div className="board">
                <Tile/>
            </div>

            <Message state={this.state.game.state}/>
        </div>

    );
  }
}

*/


export default class App extends React.Component {
    render(){
        return (
            <div>To be implemented...</div>
        );
    }
}

let gameState = {
    playerOneSymbol = "X",
    playerTwoSymbol = "O",
    currentTurn = "X",
    board: [
        "","","","","","","","",""
    ]
}

let render = function(state){
    return
    "<div class='board'>" +
    "<div class='square'>" + state.board[0] + "</div>" +
    "<div class='square'>" + state.board[1] + "</div>" +
    "<div class='square'>" + state.board[2] + "</div>" +
    "<div class='square'>" + state.board[3] + "</div>" +
    "<div class='square'>" + state.board[4] + "</div>" +
    "<div class='square'>" + state.board[5] + "</div>" +
    "<div class='square'>" + state.board[6] + "</div>" +
    "<div class='square'>" + state.board[7] + "</div>" +
    "<div class='square'>" + state.board[8] + "</div>" +
    "</div>"
}

document.querySelector('.render-target').innerHTML = render (gameState)