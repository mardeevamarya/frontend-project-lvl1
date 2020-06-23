import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
} 

const genRoundData = () => {
  const question = getRandomInt(1, 100);
  const result = (isEven(question)) ? 'yes' : 'no';
  return [question, result];
};

export default () => { startEngine(condition, genRoundData); };


