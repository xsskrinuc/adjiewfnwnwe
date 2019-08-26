import './bar.sass';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addDrink } from 'store/bar/actions';

const Drink = function (name, price) {
	this.name = name;
	this.price = price;
}

const drinks = [
	new Drink('Vodka', 10),
	new Drink('Whiskey', 15),
	new Drink('Spirit', 20),
].reduce((acc, drink) => {
	acc[drink.name] = drink;
	return acc;
}, {});

const Bar = () => {
	return (
		<div className="bar">
			<div className="bar-drinks">
				No drinks to order yet :(
			</div>
			<div className="bar-order">
				Order
			</div>
		</div>
	);
}

export default Bar;
