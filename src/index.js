import Scores from './modules/populate.js';
import './style.css';
import FormData, { addScore, createGame } from './modules/formdata.js';
import { fetchScore } from './modules/fetchScore.js';

// const newScore = new Scores();
// newScore.add(newScore.scoreArr);

export const username = document.querySelector('#name');
export const score = document.querySelector('#score');
export const form = document.querySelector('.form');
export const scoreBox = document.querySelector('.score-board');

const newGame = {
	'name': 'Primer'
}


// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
// 	method: `POST`,
// 	body: JSON.stringify(newGame),
// 	headers: { 'Content-type': 'application/json; charset=UTF-8', },
// }).then(response => response.json()).then(res => console.log(res)).catch(err => console.log(err))


createGame(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/`, `games`, newGame)

form.addEventListener('submit', (e) => {
	e.preventDefault()

	const newForm = {
		"user": username.value,
		"score": score.value,
	};


	// fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x9zbGm2F5WEx5bD6xV22/scores/', {
	// 	method: `POST`,
	// 	body: JSON.stringify(newForm),
	// 	headers: { 'Content-type': 'application/json; charset=UTF-8', },
	// }).then(response => response.json()).then(res => {
	// 	fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/x9zbGm2F5WEx5bD6xV22/scores/').then(response => response.json()).then(msg => {
	// 		const objs = msg.result;

	// 		objs.map(obj => {
	// 			const listItem = document.createElement('li');
	// 			listItem.textContent = `${obj.user}: ${obj.score}`
	// 			scoreBox.appendChild(listItem)
	// 		})
	// 	})



	// })

	addScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`, `x9zbGm2F5WEx5bD6xV22/`, `scores`, newForm)
	fetchScore(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`, `x9zbGm2F5WEx5bD6xV22/`, `scores`)
})