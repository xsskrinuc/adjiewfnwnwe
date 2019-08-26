import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Application from 'modules/Application';
import reducers from 'store';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
	<Provider store={store}>
		<Application />
	</Provider>,
  	document.getElementById('app')
);
