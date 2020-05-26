#!/usr/bin/env node
import {brainEven} from '../src/index.js';

console.log('Welcome to the Brain Games!');
brainEven();


const condition = 'Answer "yes" if the number is even, otherwise answer "no"';


const generate = () => {
	let number = getRandomInt(1, 100);
	let resArr = [];
	resArr.push(number);	
	console.log('Question: '+ number);
	let bool = even(number);
	let result;
	if (bool) {
		result = "yes";
	}
	else result = "no";
	resArr.push(result);
	return resArr;
}

const even = (num) => {
	if (num % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}



