export const createGame = (base, endpoint, bodyObject) => {
  fetch([base, endpoint].join(''), {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((response) => response.json()).then((msg) => msg).catch((err) => (err));
};

export const addScore = (url, id, score, bodyObject) => {
  fetch([url, id, score].join(''), {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json()).then((msg) => msg.result).catch((err) => (err));
};
