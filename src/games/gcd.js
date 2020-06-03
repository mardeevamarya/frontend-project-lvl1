import brain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Find the greatest common divisor of given numbers.';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};

const generate = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);
  const resVirazh = `${number1} ${number2}`;
  const resArr = [];
  const	result = NOD(number1, number2);
  resArr.push(String(resVirazh));
  console.log(`Question: ${resVirazh}`);
  resArr.push(String(result));
  return resArr;
};

const startBrainGcd = () => {
  brain(condition, generate);
};

export default startBrainGcd;
