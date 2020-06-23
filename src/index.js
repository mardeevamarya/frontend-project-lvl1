import readlineSync from 'readline-sync';

const numberRounds = 3;

const startEngine = (condition, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  for (let round = 1; round <= numberRounds; round += 1) {
    const [question, correctAnswer] = genRoundData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(.`);
      console.log(`Correct answer was ${correctAnswer}.Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log('Congratulations!!!');
};


export default startEngine;
