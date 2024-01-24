import readlineSync from 'readline-sync';

const calc = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  console.log('What is the result of the expression?');

  const max = 99;
  const min = 1;
  const arrySimbols = ['+', '-', '*'];
  let equasion;
  let result;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 3; i++) {
    const number1 = Math.floor(Math.random() * (max - min) + min);
    const number2 = Math.floor(Math.random() * (max - min) + min);
    const randomSymbols = arrySimbols[Math.floor(Math.random() * arrySimbols.length)];

    if (randomSymbols === '+') {
      equasion = `${number1} + ${number2}`;
      result = `${number1 + number2}`;
    } if (randomSymbols === '-') {
      equasion = `${number1} - ${number2}`;
      result = `${number1 - number2}`;
    } else {
      equasion = `${number1} * ${number2}`;
      result = `${number1 * number2}`;
    }

    console.log(`Question: ${equasion}`);
    const answer = readlineSync.question('Your answer: ');
    // eslint-disable-next-line eqeqeq
    if (answer == result) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${result}"`);
      console.log(`Let's try again, ${nameUser}!`);
      return ('GameOver');
    }
  }

  console.log(`Congratulations, ${nameUser}!`);
  return ('GameOver');
};

export default calc;
