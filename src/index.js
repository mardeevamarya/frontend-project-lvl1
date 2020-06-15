import readlineSync from 'readline-sync';

const startBrain = (condition, generate) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  const numberRound = 3;
  for (let i = 1; i <= numberRound; i += 1) {
    const [questionRes, answerRes] = generate();
    console.log(`Question: ${questionRes}`);
    const answer = readlineSync.question('Answer: ');
    if (answer !== answerRes) {return console.log(`${answer} is wrong answer ;(. Correct answer was ${answerRes}.Let's try again, ${userName}`);} else {
      console.log('Correct!');
    }
  }
   console.log('Congratulations!!!');
};


export default startBrain;
