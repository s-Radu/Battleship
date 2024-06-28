import '../src/css/style.css';
import toggleDarkMode from '../src/utilis/darkMode';
import { getElement } from './utilis/utilis';

// const parentElement = document.body;

let darkModeToggle = getElement('#toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// WORK WITH BRANCES !
