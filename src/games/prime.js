import brain from '../index.js';
import { getRandomInt } from '../utils.js';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generatePrime = () => {
  const n = 100;
  const result = [];
  nextPrime:
  for (let i = 2; i <= n; i += 1) { // Для всех i...
    for (let j = 2; j < i; j += 1) { // проверить, делится ли число..
      if (i % j === 0) continue nextPrime; // не подходит, берём следующее
    }
    result.push(i);
  }
  return result;
};

const numIncludes = (arr, num) => {
  if (arr.includes(num)) {
    return true;
  }
  return false;
};

const generate = () => {
  const num = getRandomInt(1, 100);
  const resArr = [];
  resArr.push(String(num));
  const listNum = generatePrime();
  const bool = numIncludes(listNum, num);
  console.log(`uestion: ${num}`);
  let result;
  if (bool) {
    result = 'yes';
  } else result = 'no';
  resArr.push(String(result));
  return resArr;
};


const startBrainPrime = () => {
  brain(condition, generate);
};

export default startBrainPrime;
