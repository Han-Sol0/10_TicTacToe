import { useSelector } from 'react-redux';
import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { selectCurrentPlayer, selectStatus } from '../../selectors';
import { InformationLayout } from './information-layout';
import { Component } from 'react';

/* export const Information = () => {
	const status = useSelector(selectStatus);
	const currentPlayer = useSelector(selectCurrentPlayer);

	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;

	return <InformationLayout information={information} />;
}; */

export class InformationContainer extends Component {
	constructor(props) {
		super();
		this.status = props.status;
		this.currentPlayer = props.currentPlayer;
		this.playerAction = props.playerAction;
		this.playerName = props.playerName;
		this.information =
			this.status === STATUS.DRAW
				? 'Ничья'
				: `${this.playerAction}: ${this.playerName}`;
	}
	render() {
		return <InformationLayout information={this.information} />;
	}
}

const mapStateToProps = ({ status, currentPlayer }) => ({
	status: status,
	currentPlayer: currentPlayer,
	playerAction: PLAYER_ACTION[status],
	playerName: PLAYER_NAME[currentPlayer],
});

export const Information = connect(null, mapStateToProps)(InformationContainer);
