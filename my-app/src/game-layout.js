import { Field, Information } from './components';
import styles from './game.module.css';
import { Component } from 'react';

export class GameLayout extends Component {
	constructor(props) {
		super(props);
		this.handleRestart = this.props.handleRestart.bind(this);
	}

	render() {
		return (
			<div className={styles.game}>
				<Information />
				<Field />
				<button className={styles.restartButton} onClick={this.handleRestart}>
					Начать заново
				</button>
			</div>
		);
	}
}
