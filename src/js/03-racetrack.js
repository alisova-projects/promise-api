import '../css/common.css';

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  raceCounter += 1;
  const promises = horses.map(run);
  
  updateWinnerField('');
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');
  determineWinner(promises);
  waitForAll(promises);
}

/*
 * Promise.race([]) для ожидания первого выполнившегося промиса
 */
// вычислить победителя
function determineWinner (horsesPromise) {
  Promise.race(horsesPromise).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time}`);

    updateResultsTable({ horse, time, raceCounter });
  });
}

/*
 * Promise.all([]) для ожидания всех промисов
 */
// добегают все
function waitForAll (horsesPromise) {
  Promise.all(horsesPromise).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки')});
}

function updateWinnerField (message) {
  refs.progressField.textContent = message;
}

function updateProgressField (message) {
  refs.winnerField.textContent = message;
}

function updateResultsTable ({horse, time, raceCounter}) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td></tr>`;

  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function run (horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500)

    setTimeout(() => {
      resolve({ horse, time });
      
    }, time);
  })
}  

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}