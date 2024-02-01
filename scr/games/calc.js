import gameEngine from '../gameEngine.js';
import { getRandomNumber, randomEquasion } from '../utilities.js';

const rule = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const question = randomEquasion(getRandomNumber(0, 100), getRandomNumber(0, 100));
  return [question.equasion, question.result];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
