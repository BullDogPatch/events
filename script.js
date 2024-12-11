const button = document.querySelector('.btn-colour');
const soundButton = document.querySelector('.btn-sound');
const h3 = document.querySelector('.hover-over');
const colours = ['red', 'blue', 'pink', 'green', 'yellow'];

// https://stackoverflow.com/questions/29356866/change-color-of-the-text-on-click-to-random-color-button
function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const randomColour = Math.floor(Math.random() + 1);
button.addEventListener('click', () => {
  document.body.style.backgroundColor = randomColors();
  button.style.backgroundColor = randomColors();
  button.style.color = randomColors();
  soundButton.style.backgroundColor = randomColors();
  soundButton.style.color = randomColors();
});

soundButton.addEventListener('click', () => {
  const audio = new Audio('sounds/fart-9-228245.mp3');
  audio.play();
});

h3.addEventListener('mouseover', () => {
  h3.style.transform = 'rotate(360deg) scale(1.2)';
  h3.style.transition = 'transform 0.5s ease';
});

h3.addEventListener('mouseout', () => {
  h3.style.transform = 'rotate(-360deg) scale(1)';
  h3.style.transition = 'transform 0.5s ease';
});
