let gamesequence = [];
let playersequence = [];
let level = 0;

const start = document.querySelector('.start-button');
const info = document.querySelector('.info');

function nextStep() {
    const tiles = ['sq1', 'sq2', 'sq3', 'sq4'];
    const random = tiles[Math.floor(Math.random() * tiles.length)];
  
    return random;
  }
  
  function nextRound() {
    level += 1;
  
    const nextSequence = [...sequence];
    nextSequence.push(nextStep());
  }

function startGame() {
  startButton.classList.add('hidden');
  info.classList.remove('hidden');
  info.textContent = 'Wait for the computer';
};

startButton.addEventListener('click', startGame);

