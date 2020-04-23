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

const greeting = () => {
	var userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');
	console.log('Answer "yes" if the number is even, otherwise answer "no"');
	let count = 0;
	for (let i = 1; i <= 3; i +=1) {		
		let number = getRandomInt(1, 100);
		console.log('Question: '+number);
		var answer = readlineSync.question('Answer: ');
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

export default greeting;




