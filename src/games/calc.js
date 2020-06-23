import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';


const condition = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const doMath = (x, znak, y) => {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error('Unknown state!');
  }
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const correctAnswer = String(doMath(number1, operator, number2));
  const question = String(number1) + String(operator) + String(number2);
  return [question, correctAnswer];
};

export default () => {
  startEngine(condition, genRoundData);
};
