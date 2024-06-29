import '../src/css/style.css';
import nav from '../src/game/components/nav';
import toggleDarkMode from '../src/utilis/darkMode';
import { getElement } from './utilis/utilis';

const parentElement = document.body;
parentElement.appendChild(nav());

let darkModeToggle = getElement('#toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);

// WORK WITH BRANCES !
