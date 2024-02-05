import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utilities.js';

const rule = 'Find the greatest common divisor of given numbers.';

const nod = (x, y) => {
  if (!y) {
    return x;
  }
  return nod(y, x % y);
};

const getQuestionAndAnswer = () => {
  const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)];
  const answer = nod(...question).toString();
  return [question.join(' '), answer];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
