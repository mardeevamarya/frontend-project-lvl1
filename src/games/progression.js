import startEngine from '../index.js';
import { getRandomInt } from '../utils.js';


const condition = 'What number is missing in the progression?';
const progressionLength = 10;

const makeProgression = (step, first) => {
  const progression = [first];
  for (let i = 1; i < progressionLength; i += 1) {
    const current = progression[i - 1] + step;
    progression.push(current);
  }
  return progression;
};

const genRoundData = () => {
  const step = getRandomInt(1, 10);
  const first = getRandomInt(1, 100);
  const progression = makeProgression(step, first);
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join();
  return [question, correctAnswer];
};

export default () => {
  startEngine(condition, genRoundData);
};
