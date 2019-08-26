import './drinks-table.sass';
import React from 'react';
import { connect } from 'react-redux';

const DrinksTable = ({ drinks }) => {
	return (
		<div className="drinks-table">
			{!drinks.length ? (
				'Go order some drinks, dude. If you can...'
			) : (
				drinks.map((drink) => {
					return (
						<div className="drinks-table-item">
							<div className="drinks-table-item-name">
								{drink.name}
							</div>
							<div className="drinks-table-item-price">
								${drink.price}
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		drinks: state.bar.drinks,
	};
};

export default connect(mapStateToProps)(DrinksTable);
