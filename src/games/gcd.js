import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Find the greatest common divisor of given numbers.';

const getGCD = (x, y) => {
  if (!y) return x;
  return getGCD(y, x % y);
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const question = `${number1} ${number2}`;
  const correctAnswer = String(getGCD(number1, number2));
  return [question, correctAnswer];
};

export default () => {
  startEngine(condition, genRoundData);
};
