#!/usr/bin/env node

import {brain} from '../index.js';
import readlineSync from 'readline-sync';
import {getRandomInt} from '../utils.js';


const greeting = () => {
	console.log('Welcome to the Brain Games!');
	let userName = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + userName + '!');	
}

const condition = () => {
	console.log('Answer "yes" if the number is even, otherwise answer "no"');
}

const generate = () => {
	let number = getRandomInt(1, 100);
}

const even = (num) => {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}

const logic = (number) => {
	let answer = readlineSync.question('Answer: ');
	let bool = even(number);
	let result;
	if (bool) {
		result = "yes";
	}
	else result = "no";

}

const res = () => {
	if (count === 3) {
		console.log('Congratulations!!!');
	}
}

const brainCalc = () => {
	brain(greeting, condition, generate, logic, res);
}

export {brainCalc};