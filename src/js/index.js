
import { greet } from './script.js';// Импорт функции из другого JS файла
import '../styles/style.scss';  // Импорт SCSS файла

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.onclick = greet;  // Привязка функции greet к событию click
  document.body.appendChild(button);
});

console.log("Hello !")