import readlineSync from 'readline-sync';

const startEngine = (condition, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  const number = 3;
  for (let round = 1; round <= number; round += 1) {
    const [question, correctAnswer] = genRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.Let's try again, ${userName}`); return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations!!!');
};


export default startEngine;
