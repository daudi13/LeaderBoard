import 'regenerator-runtime/runtime';

const fetchScore = async function (url, id, score) {
  try {
    const res = await fetch([url, id, score].join(''));
    const data = await res.json();
    const objs = await data;

    return objs;
  } catch (err) {
    return alert(err);
  }
};

export default fetchScore;