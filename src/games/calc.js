import startEngine from '../index.js';
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
      break;
    default:
      throw new Error('Unknown state!');
  }
  return math;
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const arr = ['+', '-', '*'];
  const znak = arr[getRandomInt(0, 2)];
  const math = String(doMath(number1, znak, number2));
  const resVirazh = String(number1) + String(znak) + String(number2);
  return [resVirazh, math];
};

export default () => {
  startEngine(condition, genRoundData);
};
