import startBrain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  return (num % 2 === 0);   
};

const genRoundData = () => {
  const number = getRandomInt(1, 100);
  const bool = isEven(number);
  let result;
  if (bool) ? {result = 'yes';} : result = 'no';
  return [number, result];
};

export default () => {
  startBrain(condition, genRoundData);
};

