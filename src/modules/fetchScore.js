import 'regenerator-runtime/runtime'

export const fetchScore = async function (url, id, score) {
	const res = await fetch([url, id, score].join(''));
	const data = await res.json();
	const data2 = await data
	console.log(data2)
}