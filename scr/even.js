import readlineSync from 'readline-sync';

const even = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const max = 99;
  const min = 1;
  let comparison;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 5; i++) {
    const randomNum = Math.floor(Math.random() * (max - min) + min);
    if (randomNum % 2 === 0) {
      comparison = 'yes';
    } else {
      comparison = 'no';
    }

    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === comparison) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${comparison}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return ('GameOver');
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
  return ('GameOver');
};

export default even;
