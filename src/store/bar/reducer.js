const initialState = {
	drinks: [],
};

export default function barReducer(state = initialState, action) {
	const newState = { ...state };

	switch (action.type) {
		case 'ADD_DRINK':
			newState.drinks = [...newState.drinks, action.payload];
			break;
	}

	return newState;
}
