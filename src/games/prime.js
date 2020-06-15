import startBrain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrime = (num) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const genRoundData = () => {
  const num = getRandomInt(1, 100);
  let bool = generatePrime(num);
  let result = 'no';
  if (bool) {result = 'yes';};
  return [num, result];
};


export default () => {
  startBrain(condition, genRoundData);
};

