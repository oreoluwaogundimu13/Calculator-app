// app.js
const startButton = document.getElementById('start-btn');

startButton.addEventListener('click', () => {
  document.getElementById('home').style.display = 'none';
  document.getElementById('calc').style.display = 'block';
});
