import startBrain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const genRoundData = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const resVirazh = `${number1} ${number2}`;
  const	result = String(NOD(number1, number2));
  return [resVirazh, result];
};

export default () => {
  startBrain(condition, genRoundData);
};
