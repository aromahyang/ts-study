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
		background-color: ${props.player && props.isActive ? props.player === 1 ? 'red' : 'blue' : 'white' }
	`}
`;

function Board(props) {
    const [gridStates, setGridState] = useState(Array(9).fill(0));

    let grids: any = [], row: JSX.Element[] = [];
    const handleClick = (i) => {
        if(props.player === 1) {
            props.changePlayer(2);
        } else {
            props.changePlayer(1);
        }
        console.log(i, props.player);

        setGridState(gridStates[i] = props.player);
    }

	for(let i = 0 ; i < 9 ; i++) {
		let grid = (<Grid player={props.player} isActive={gridStates[i] !== 0} onClick={() => handleClick(i)}></Grid>);

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