const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');
const counterEl = document.getElementById('counter');

let count = 0;
incrementEl.addEventListener('click', () => {
	count++;
	counterEl.innerText = count;
});
decrementEl.addEventListener('click', () => {
	count--;
	counterEl.innerText = count;
});
