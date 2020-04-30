import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const even = (num) => {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

const brainEven = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('Answer "yes" if the number is even, otherwise answer "no"');
	let count = 0;
	for (let i = 1; i <= 3; i +=1) {		
		let number = getRandomInt(1, 100);
		console.log('Question: '+number);
		let answer = readlineSync.question('Answer: ');
		let bool = even(number);
		if ((bool)&&(answer === 'yes')) {
			console.log('Correct!');
			count += 1;
		}
		else if ((!bool)&&(answer === 'yes')){
			console.log('"yes" is wrong answer ;(. Correct answer was "no".Let\'s try again, '+ userName);
			break;
		}
		else if ((bool)&&(answer === 'no')){
			console.log('"no" is wrong answer ;(. Correct answer was "yes".Let\'s try again, '+ userName);
			break;
		}
		else if ((!bool)&&(answer === 'no')){
			console.log('Correct!');
			count += 1;
		}
		else {
			console.log('Wrong answer!');
			break;
		}
	}
	if (count === 3) {
		console.log('Congratulations!!!');
	}
}


const doMath = (x,znak,y) => {
    let math = 0;
    switch(znak) {
        case '+':
        math = x + y;
        break;
        case '-':
        math = x - y;
        break;
        case '*':
        math = x * y;
    }
    return math;
}

const NOD = (x, y) => {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
}

const progression = (step, nach) => {
	let result = [];
	result[0] = nach;
	for (let i = 1; i < 10; i += 1) {
		result[i] = result[i-1] + step;
	}
	return result;
}

const arrToStr = (arr, index) => {
	let resultStr = '';
	let temp = '..'
	for (let i = 0; i < 10; i += 1) {
		if (i === index) {
			resultStr += temp + ' ';
		}
		else {
			resultStr += arr[i] + ' ';
		}
	}
	return resultStr;
}

const resultNum = (arr, index) => {
	return arr[index];
}

const brainCalc = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('What is the result of the expression?');
	let count = 0;
	
	for (let i = 1; i <= 3; i +=1) {		
		let number1 = getRandomInt(1, 100);
		let number2 = getRandomInt(1, 100);
		let arr = ['+', '-', '*'];
		let znak = arr[getRandomInt(0, 2)];
		let	result = doMath(number1, znak, number2);		
		console.log('Question: '+number1+" "+znak+" "+number2);
 		let answer = readlineSync.question('Answer: ');
 		if (result === Number(answer)) {
			console.log('Correct!');
			count += 1;
 		}
		else {
			console.log(answer+ ' is wrong answer ;(. Correct answer was '+ result +'.Let\'s try again, '+ userName);
			break;
		}
	}
 	if (count === 3) {
 		console.log('Congratulations!!!');
	}
};

const brainGcd = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('Find the greatest common divisor of given numbers.');
	let count = 0;
	
	for (let i = 1; i <= 3; i +=1) {		
		let number1 = getRandomInt(1, 100);
		let number2 = getRandomInt(1, 100);
		let	result = NOD(number1, number2);		
		console.log('Question: '+number1+" "+number2);
 		let answer = readlineSync.question('Answer: ');
 		if (result === Number(answer)) {
			console.log('Correct!');
			count += 1;
 		}
		else {
			console.log(answer+ ' is wrong answer ;(. Correct answer was '+ result +'.Let\'s try again, '+ userName);
			break;
		}
	}
 	if (count === 3) {
 		console.log('Congratulations!!!');
	}
};

const brainPrg = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('What number is missing in the progression?');
	let count = 0;
	
	for (let i = 1; i <= 3; i +=1) {		
		let step = getRandomInt(1, 10);
		let nach = getRandomInt(1, 100);
		let progrArr = progression(step, nach);
		let index = getRandomInt(1, 10);
		let resStr = arrToStr(progrArr, index);
		let result = resultNum(progrArr, index);
		console.log('Question: '+ resStr);
 	 	let answer = readlineSync.question('Answer: ');
 	 	if (result === Number(answer)) {
		 	console.log('Correct!');
		 	count += 1;
 	 	}
		 else {
		 	console.log(answer+ ' is wrong answer ;(. Correct answer was '+ result +'.Let\'s try again, '+ userName);
		 	break;
		}
	}
  	if (count === 3) {
  		console.log('Congratulations!!!');
	 }
};

const generatePrime = () => {
	let n = 100;
	let result = [];
	nextPrime:
	for (let i = 2; i <= n; i++) { // Для всех i...
		for (let j = 2; j < i; j++) { // проверить, делится ли число..
			if (i % j == 0) continue nextPrime; // не подходит, берём следующее
		}
		result.push(i);
	}
	return result;
}

const numIncludes = (arr, num) => {
	if (arr.includes(num)) {
		return true;
	}
	else return false;
}

const brainPrime = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
	let count = 0;
	
	for (let i = 1; i <= 3; i +=1) {		
		let num = getRandomInt(1, 100);
		let listNum = generatePrime();
		let bool = numIncludes(listNum, num);
		console.log('Question: '+ num);
 	  	let answer = readlineSync.question('Answer: ');
 	  	if ((bool)&&(answer === 'yes')) {
			console.log('Correct!');
			count += 1;
		}
		else if ((!bool)&&(answer === 'yes')){
			console.log('"yes" is wrong answer ;(. Correct answer was "no".Let\'s try again, '+ userName);
			break;
		}
		else if ((bool)&&(answer === 'no')){
			console.log('"no" is wrong answer ;(. Correct answer was "yes".Let\'s try again, '+ userName);
			break;
		}
		else if ((!bool)&&(answer === 'no')){
			console.log('Correct!');
			count += 1;
		}
		else {
			console.log('Wrong answer!');
			break;
		}
	}
   	if (count === 3) {
  		console.log('Congratulations!!!');
	}
};


export {brainEven};
export {brainCalc};
export {brainGcd};
export {brainPrg};
export {brainPrime};



