import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if the number is even, otherwise answer "no"';

const genRoundData = () => {
  const question = getRandomInt(1, 100);
  const result = (question % 2 === 0) ? 'yes' : 'no';
  return [question, result];
};

export default () => { startEngine(condition, genRoundData); };
