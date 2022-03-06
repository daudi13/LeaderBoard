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
      if (msg.result) {
        hol.innerText = msg.result;
        setTimeout(() => {
          hol.innerText = '';
        }, 3000);
      } else {
        hol.innerText = msg.message;
        hol.style.color = 'red';
        return setTimeout(() => {
          hol.innerText = '';
        }, 3000);
      }
      return msg;
    })
    .catch((err) => {
      if (err) {
        hol.innerText = err;
        hol.style.color = 'red';
        return setTimeout(() => {
          hol.style.opacity = 0;
        }, 3000);
      }
      return err;
    });
};
