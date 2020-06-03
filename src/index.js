import readlineSync from 'readline-sync';

const brain = (condition, generate) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);
  let count = 0;
  for (let i = 1; i <= 3; i += 1) {
    const tempRes = generate();
    const answer = readlineSync.question('Answer: ');
    if ((answer === tempRes[1])) { console.log('Correct!'); count += 1; } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${tempRes[1]}.Let's try again, ${userName}`); break;
    }
  }
  if (count === 3) {
    console.log('Congratulations!!!');
  }
};


export default brain;
