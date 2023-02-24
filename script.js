const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl = document.getElementById('counter');

// initial state
const initialState = {
	value: 0,
};

// reducer function
const counterReducer = (state = initialState, action) => {
	if (action.type === 'counter/increment') {
		return {
			...state,
			value: state.value + 1,
		};
	}
	if (action.type === 'counter/decrement') {
		return {
			...state,
			value: state.value - 1,
		};
	}
	return state;
};

const store = Redux.createStore(counterReducer);

const render = () => {
	const state = store.getState();
	counterEl.innerText = state.value.toString();
};

// Update the UI with the initial data
render();
// And subscribe to redraw whenever the data changes in the future
store.subscribe(render);

incrementEl.addEventListener('click', () => {
	store.dispatch({ type: 'counter/increment' });
});

decrementEl.addEventListener('click', () => {
	store.dispatch({ type: 'counter/decrement' });
});
