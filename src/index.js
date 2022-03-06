import './style.css';
import fetchScore from './modules/fetchScore.js';
import { createGame, addScore } from './modules/formdata.js';

export const username = document.querySelector('#name');
export const score = document.querySelector('#score');
export const scoreBox = document.querySelector('.score-board');
export const btnrefresh = document.querySelector('.refresh');
export const btnSubmit = document.querySelector('.submit');
export const btnRefresh = document.querySelector('.refresh');
export const notification = document.querySelector('.notification');

const newGame = {
  name: 'Primer',
};

createGame('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', 'games', newGame);

btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  const newForm = {
    user: username.value,
    score: score.value,
  };

  addScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', 'IgK6r3lRfL4ZPyxrcCbb/', 'scores', newForm, notification);
  username.value = '';
  score.value = '';
});

btnRefresh.addEventListener('click', () => {
	location.reload()
});

onload = () => {
		(async () => {
  try {
    const vals = await fetchScore('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', 'IgK6r3lRfL4ZPyxrcCbb/', 'scores');
		const arrs = vals.result.sort((a, b) => b.score - a.score).slice(0, 10);
    arrs.map((arr) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${arr.user}: ${arr.score}`;
      return scoreBox.appendChild(listItem);
    });
  } catch (err) {
    return err;
  }
	})();

}