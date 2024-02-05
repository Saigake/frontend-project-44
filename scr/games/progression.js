import gameEngine from '../gameEngine.js';
import { getRandomNumber } from '../utilities.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const getProgression = (startProgression, stepProgression) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const value = startProgression + stepProgression * i;
    progression.push(value);
  }

  return progression;
};

const getQuestionAndAnswer = () => {
  const minStep = 2;
  const maxStep = 5;
  const start = getRandomNumber(0, 50);
  const step = getRandomNumber(minStep, maxStep);
  const progression = getProgression(start, step);
  const minIndexOfHiddenNum = 0;
  const maxIndexOfHiddenNum = progressionLength - 1;
  const indexOfHiddenNum = getRandomNumber(minIndexOfHiddenNum, maxIndexOfHiddenNum);
  const answer = String(progression[indexOfHiddenNum]);
  progression[indexOfHiddenNum] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  gameEngine(rule, getQuestionAndAnswer);
};
