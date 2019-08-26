import './application.sass';
import React, { Component } from 'react';

import Bar from 'modules/Bar';
import Board from 'modules/Board';
import DrinksTable from 'modules/DrinksTable';

class Application extends Component {

	render() {
		return (
			<div className="application">
				<Board />
				<div className="application-bottom">
					<Bar />
					<DrinksTable />
				</div>
			</div>
		);
	}
}

export default Application;
