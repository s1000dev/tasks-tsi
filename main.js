let input1 = document.querySelector('#inp1');
let input2 = document.querySelector('#inp2');
let input3 = document.querySelector('#inp3');
let input4 = document.querySelector('#inp4');
let show1 = document.querySelector('.show1');
let show2 = document.querySelector('.show2');
let show3 = document.querySelector('.show3');

const inputs = document.getElementsByTagName('input'); // HTML-collection
const inps = Array.from(inputs);

inps.forEach(function (element) {
	element.addEventListener('input', (e) => {
		e.preventDefault();
		let clickedInput = e.target;

		if (clickedInput == input1) {
			expression(clickedInput);
		}
		if (clickedInput == input2) {
			inputFactorial(clickedInput);
		}
		if (clickedInput == input4 && input3.value) {
			doWithTwo(input3, input4);
		}
		if (clickedInput.value == '') {

		}
	})
	element.addEventListener('blur', (e) => {
		e.preventDefault();

		if (!element.value) {
			if (element == input1) {
				show1.innerHTML = '';
			} else if (element == input2) {
				show2.innerHTML = '';
			} else {
				show3.innerHTML = '';
			}
		}
	})
})

function expression(input) {
	let sum = 0;
	let inputValue = +input.value;

	sum = 4 * (inputValue ** 2) - 5 * inputValue + 16;

	show1.innerHTML = sum;
}

function inputFactorial(input) {
	let inputValue = +input.value;

	let fact = factorial(inputValue);

	let dividedFact = fact % 3;

	console.log(dividedFact);

	if (dividedFact == 0) {
		show2.innerHTML = 'Факториал числа делится на 3 без остатка, результат: ' + fact;
	} else {
		show2.innerHTML = 'Факториал числа делится на 3 c остатком ' + dividedFact + fact;
	}
}

function doWithTwo(input1, input2) {
	let x = +input1.value;
	let y = +input2.value;

	show3.innerHTML = 'Сумма чисел: ' + (x + y) + ', Разность чисел: ' + (x / y) + ', Произведение чисел: ' + (x * y);
}


function factorial(n) {
	if (n == 1) {
		return 1;
	}
	return n * factorial(--n)
}
