/*
The Tile component expects to be passed
- piece: a valid board value:
  - 0: an empty square
  - 1: plr1 has a piece here
  - 2: plr2 has a piece here
- callback: a function that it'll call when clicked
- line: a boolean, true if tile was part of winning line (STRETCH TASK)

The tile should render with the classes...
- tile: always
- plr1: if has a plr1 piece
- plr2: if has a plr2 piece
- line: if it was part of a winning line (STRETCH TASK)
*/

import React from 'react';

export default function Tile(props){

    let options;

    switch(props.value) {
        case 0:
            options = { className: 'tile', text: null};
            break;
        case 1:
            options = { className: 'tile plr1', text: 'X'};
            break;

        case 2:
            options = { className: 'tile plr2', text: 'O'};
            break;
    }

    return (
        <div className={props.win ? `${options.className} line` : options.className} onClick={() => props.playerMoved()}>{options.text}</div>
    );
}