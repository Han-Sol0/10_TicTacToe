import { GameLayout } from './game-layout';
import { RESTART_GAME } from './actions';

import { Component } from 'react';
import { connect } from 'react-redux';

export class GameContainer extends Component {
	render() {
		return <GameLayout handleRestart={this.props.handleRestart} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	handleRestart: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
