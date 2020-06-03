import brain from '../index.js';
import { getRandomInt } from '../utils.js';


const condition = 'What is the result of the expression?';


const doMath = (x, znak, y) => {
  let math = 0;
  switch (znak) {
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
};

const generate = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const resArr = [];
  const arr = ['+', '-', '*'];
  const znak = arr[getRandomInt(0, 2)];
  const math = doMath(number1, znak, number2);
  const resVirazh = String(number1) + String(znak) + String(number2);
  resArr.push(String(resVirazh));
  console.log(`Question: ${resVirazh}`);
  resArr.push(String(math));
  return resArr;
};


const startBrainCalc = () => {
  brain(condition, generate);
};

export default startBrainCalc;
