const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl = document.getElementById('counter');

// initial state
const initialState = {
	value: 0,
};

// action identifier
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

// action creators
const increment = (value) => {
	return {
		type: INCREMENT,
		payload: value,
	};
};
const decrement = (value) => {
	return {
		type: DECREMENT,
		payload: value,
	};
};

// reducer function
const counterReducer = (state = initialState, action) => {
	if (action.type === 'counter/increment') {
		return {
			...state,
			value: state.value + action.payload,
		};
	}
	if (action.type === 'counter/decrement') {
		return {
			...state,
			value: state.value - action.payload,
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
	store.dispatch(increment(4));
});

decrementEl.addEventListener('click', () => {
	store.dispatch(decrement(1));
});
