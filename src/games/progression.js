import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';


const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (step, first) => {
  const progr = [first];
  for (let i = 1; i < progressionLength; i += 1) {
    const temp = progr[i - 1] + step;
    progr.push(temp);
  }
  return progr;
};

const genRoundData = () => {
  const step = getRandomInt(1, 10);
  const nach = getRandomInt(1, 100);
  const progr = makeProgression(step, nach);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progr[hiddenIndex]);
  progr[hiddenIndex] = '..';
  const question = progr.join();
  return [question, correctAnswer];
};

export default () => {
  startEngine(condition, genRoundData);
};
