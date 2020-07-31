import React, { useState } from 'react';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

const Grid = styled.div`
	background-color: #FFFFFF;
    width: 33%;
    padding-top: 33%;
	cursor: pointer;
	border: black 1px solid;
	${props => `
		background-color: ${props.player > 0 && props.isActive ? props.player === 1 ? 'red' : 'blue' : 'white' }
	`}
`;

function Board(props) {
    let [gridStates, setGridState] = useState(Array(9).fill(0));
    
    let grids: any = [], row: JSX.Element[] = [];

	for(let i = 0 ; i < 9 ; i++) {
		let grid = (<Grid player={gridStates[i]} isActive={gridStates[i] !== 0} onClick={() => {
            handleClick(i);
            setTimeout(checkWinner, 500);
        }} />);

		row.push(grid);

		if(i % 3 === 2) {
			grids.push(row);
			row = [];
		}
    }
    
    const handleClick = (i: number) => {
        let currentPlayer: number, currentGrids = [...gridStates];

        if(currentGrids[i] !== 0) { return; }
        
        if(props.player === 1) {
            currentPlayer = 2;
        } else {
            currentPlayer = 1;
        }
        
        currentGrids[i] = currentPlayer;
        setGridState(gridStates = [...currentGrids]);
        props.changePlayer(currentPlayer);
    }

    const checkWinner = () => {
        let winner = 0;

        for(let i = 0 ; i < 3 ; i++) {
            if(gridStates[3*i] !== 0 && gridStates[3*i] === gridStates[3*i+1] && gridStates[3*i+1] === gridStates[3*i+2]) {
                winner = gridStates[3*i];
            }

            if(gridStates[i] !== 0 && gridStates[i] === gridStates[i+3] && gridStates[i+3] === gridStates[i+6]) {
                winner = gridStates[i];
            }
        }

        if(gridStates[4] !== 0) {
            if(gridStates[0] === gridStates[4] && gridStates[4] === gridStates[8]) {
                winner = gridStates[0];
            }

            if(gridStates[2] === gridStates[4] && gridStates[4] === gridStates[6]) {
                winner = gridStates[2];
            }
        }
        
        if(winner) {
            console.log(gridStates);
            alert(`Player ${winner} wins!`);
            props.changeWinner(winner);
            props.changeScore(winner);
            clearBaord();
            return;
        }

        if(gridStates.find(e => e === 0) === undefined) {
            alert('Draw!');
            clearBaord();
            return;
        }
    }

    const clearBaord = () => {
        setGridState(Array(9).fill(0));
    }
    
    return(
        <div className="grid-container">
            {grids.map(r => {
                return (
                    <div className="grid-row">
                        {r.map(g => {return g})}
                    </div>
                );
            })}
        </div>
    );
}

export default inject(({ store }) => ({
    player: store.player,
    winner: store.winner,
    changePlayer: store.changePlayer,
    changeWinner: store.changeWinner,
    changeScore: store.changeScore,
}))(observer(Board));