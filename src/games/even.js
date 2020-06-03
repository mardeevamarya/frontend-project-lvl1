import brain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const even = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const generate = () => {
  const number = getRandomInt(1, 100);
  const resArr = [];
  resArr.push(String(number));
  console.log(`Question: ${number}`);
  const bool = even(number);
  let result;
  if (bool) {
    result = 'yes';
  } else result = 'no';
  resArr.push(String(result));
  return resArr;
};

const startBrainEven = () => {
  brain(condition, generate);
};

export default startBrainEven;
