import React from 'react';
import {makeMove, newGame} from "../logic/index";
import Tile from './tile';
import Message from './message';

/*
The main game App! It should have a TicTacToe game state in its component state,
and use the Tile and Message components to render the game.

Then the `makeMove` function from the logic layer should be used to update the
game state as the tiles are being clicked.

The user should also be able to reset the game.

The App component should render an outer element with a `container` CSS class,
and all tiles in an element with a `board` CSS class.
*/

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            game: newGame(),
        }
    }

playerMoved(i, value) {
    if (value === 1 || value === 2) return;
    const newState = makeMove(this.state.game, i);
    this.setState({game: newState});
}


resetGame(){
    this.setState (this.state.game = newGame());
}

render(){
    return (
        <div><Message showCurrentGameMessage={this.state.game}/>
        <div className='board'>{this.state.game.board.map((tile, index) =>
        <Tile value={tile} win={this.state.game.line.includes(index)} playerMoved={() => this.playerMoved(index, tile)} />)}
        </div>
        <button onClick={() => this.resetGame()}>Reset</button>
        </div>
        );
    }
}


// handleClick(index)
// {
// if (this.state.board[index] === "" && !this.state.winner){
// this.state.board[index] = this.state.currentTurn
// this.setState({
// board: this.state.board,
// currentTurn: this.state.currentTurn === this.state.playerOneSymbol ? this.state.playerTwoSymbol : this.state.playerOneSymbol,
// winner: this.checkForWinner(),
// })
// }
// }
// checkForWinner(){
// let currentTurn = this.state.currentTurn
// let symbols = this.state.board
// let winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// return winningCombos.find(function (combo) {
// if(symbols[combo[0]] !== "" && symbols[combo[1]] !== "" && symbols[combo[2]] !== "" && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
// return currentTurn
// } else {
// return false
// }
//
// })
// }

/*
import Message from './message';
import Tile from './tile';


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

/*

export default class App extends React.Component {
    render(){
        return (
            <div>To be implemented...</div>
        );
    }
}

*/




/*

let gameState = {
    playerOneSymbol : "X",
    playerTwoSymbol : "O",
    currentTurn : "X",
    board: [
        "","","","","","","","",""
    ]
}



    function render(state){
    document.querySelector(".render-target").innerHTML = "<div class='board'>" +
    "<div class='square' data-square-id='0'>" + state.board[0] + "</div>" +
    "<div class='square' data-square-id='1'>" + state.board[1] + "</div>" +
    "<div class='square' data-square-id='2'>" + state.board[2] + "</div>" +
    "<div class='square' data-square-id='3'>" + state.board[3] + "</div>" +
    "<div class='square' data-square-id='4'>" + state.board[4] + "</div>" +
    "<div class='square' data-square-id='5'>" + state.board[5] + "</div>" +
    "<div class='square' data-square-id='6'>" + state.board[6] + "</div>" +
    "<div class='square' data-square-id='7'>" + state.board[7] + "</div>" +
    "<div class='square' data-square-id='8'>" + state.board[8] + "</div>" +
    "</div>"
    return
}


render(gameState)

document.querySelector('.render-target').innerHTML = render (gameState)

*/

