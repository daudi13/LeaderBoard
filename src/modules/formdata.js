
export const createGame = (base, endpoint, bodyObject) => {
	fetch ([base,endpoint].join(''), {
		method: 'POST',
		body: JSON.stringify(bodyObject),
		headers: { 'Content-type': 'application/json; charset=UTF-8', },
	}).then(response => response.json()).then(msg => console.log(msg)).catch(err => alert(err))
}

export const addScore = (url, id, score, bodyObject) => {
	fetch([url, id, score].join(''), {
		method: 'POST',
		body: JSON.stringify(bodyObject),
		headers: { 'Content-type': 'application/json; charset=UTF-8', },
	}).then(response => response.json()).then(msg => console.log(msg)).catch(err => alert(err))
}

