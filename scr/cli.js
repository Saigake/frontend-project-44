import readlineSync from 'readline-sync';

const getName = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export default getName;
