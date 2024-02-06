import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utilities.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrime = (randomQuestion) => {
  if (randomQuestion % 2 === 0 || randomQuestion % 3 === 0 || randomQuestion % 5 === 0) {
    return 'no';
  }

  return 'yes';
};

const getQuestionAndAnswer = () => {
  const question = getRandomNumber(1, 100);
  const answer = getPrime(question);
  return [question, answer];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
