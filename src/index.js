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



export {brainEven};
export {brainCalc};



