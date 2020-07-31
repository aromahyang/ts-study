import React from 'react';
import './App.css';
import { inject, observer } from 'mobx-react';
import ScoreCard from './components/ScoreCard';
import Board from './components/Board';

function App(props) {
	return (
		<div className="container">
			<div className="content">
				<ScoreCard name={"Player 1"} backgroundColor={"red"} />
				<Board player={props.player} />
				<ScoreCard name={"Player 2"} backgroundColor={"blue"} />
			</div>
		</div>
	);
}

export default inject(({ store }) => ({
	player: store.player,
}))(observer(App));
