import readlineSync from 'readline-sync';

export const greetings = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + nameUser + '!');
}
