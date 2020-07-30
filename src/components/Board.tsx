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
        console.log(i, currentPlayer, gridStates);
    }

	for(let i = 0 ; i < 9 ; i++) {
		let grid = (<Grid player={gridStates[i]} isActive={gridStates[i] !== 0} onClick={() => handleClick(i)}></Grid>);

		row.push(grid);

		if(i % 3 === 2) {
			grids.push(row);
			row = [];
		}
	}
    // console.log(grids)
    
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

// export default Board;
export default inject(({ store }) => ({
    player: store.player,
    changePlayer: store.changePlayer
}))(observer(Board));