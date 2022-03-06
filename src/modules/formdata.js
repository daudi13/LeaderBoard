export const createGame = (base, endpoint, bodyObject) => {
  fetch([base, endpoint].join(''), {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then((response) => response.json())
    .then((msg) => msg.result)
    .catch((err) => (err));
};

export const addScore = (url, id, score, bodyObject, hol) => {
  fetch([url, id, score].join(''), {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then((res) => res.json())
    .then((msg) => {
      hol.innerText = msg.result;
      return setTimeout(() => {
        hol.style.opacity = 0;
      }, 3000);
    })
    .catch((err) => {
      if (err) {
        hol.style.color = 'red';
        hol.innerText = err;
        return setTimeout(() => {
          hol.style.opacity = 0;
        }, 3000);
      }
      return err;
    });
};
