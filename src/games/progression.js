import startBrain from '../index.js';
import { getRandomInt } from '../utils.js';


const condition = 'What number is missing in the progression?';

const progression = (step, nach) => {
  const result = [];
  result[0] = nach;
  for (let i = 1; i < 10; i += 1) {
    result[i] = result[i - 1] + step;
  }
  return result;
};

const arrToStr = (arr, index) => {
  let resultStr = '';
  const temp = '..';
  for (let i = 0; i < 10; i += 1) {
    if (i === index) {
      resultStr += `${temp} `;
    } else {
      resultStr += `${arr[i]} `;
    }
  }
  return resultStr;
};

const resultNum = (arr, index) => (arr[index]);

const genRoundData = () => {
  const resArr = [];
  const step = getRandomInt(1, 10);
  const nach = getRandomInt(1, 100);
  const progrArr = progression(step, nach);
  const index = getRandomInt(1, 10);
  const resStr = arrToStr(progrArr, index);
  const result = resultNum(progrArr, index);
  return [resStr, result];
};

export default () => {
  startBrain(condition, genRoundData);
};

