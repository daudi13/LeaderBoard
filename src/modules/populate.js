export default class Scores {
  scoreArr = [{
    name: 'David Ouma',
    score: '5000',
  },
  {
    name: 'Paratroper faradae',
    score: '4000',
  },
  {
    name: 'Philemon Munuli',
    score: '3500',
  },
  {
    name: 'Mary Josephine',
    score: '3200',
  },
  {
    name: 'Ebenezaer Munuke',
    score: '3100',
  },
  {
    name: 'Gaffer Saeid',
    score: '3000',
  },
  {
    name: 'Melvin Munuve',
    score: '2900',
  },
  {
    name: 'Martha Oduka',
    score: '2040',
  },
  ]

  add = (arrs) => {
    const scoreBlock = document.querySelector('.score-board');
    arrs.forEach((arr) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${arr.name}: ${arr.score}`;
      scoreBlock.appendChild(listItem);
    });
  }
}