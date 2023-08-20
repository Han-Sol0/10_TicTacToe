/* import { useDispatch } from 'react-redux'; */
import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

import { Component } from 'react';
import { connect } from 'react-redux';

/* export const Game = () => {
	const dispatch = useDispatch();

	const handleRestart = () => {
		dispatch(RESTART_GAME);
	};

	return <GameLayout handleRestart={handleRestart} />;
}; */

export class GameContainer extends Component {
	constructor({ dispatch }) {
		super();
		this.dispatch = dispatch;
	}

	handleRestart() {
		this.dispatch(RESTART_GAME);
	}
	render() {
		return <GameLayout handleRestart={this.handleRestart} />;
	}
}

export const Game = connect()(GameContainer);
