import './board.sass';
import React from 'react';

const Board = () => {
	return (
		<div className="board">
			Welcome to the Bar
			<div className="board-tasks">
				<div>Your tasks (this is not an input)</div>
				1. Start with the <i>Bar</i>: display drinks that can be ordered and make order button work again
				<br/>
				2. Drinks to order should be selectable
				<br/>
				3. Order button should add a drink to the bar reducer (store/bar)
				<br/>
				4. Show ordered drinks on the DrinksTable
				<br/>
				5. Display number of drinks on the table below
				<br/>
				6. When you click a drink it should disappear
			</div>
			<div className="board-info">
				There are <i>{'undefined'}</i> drinks on the table
			</div>
		</div>
	);
}

export default Board;
