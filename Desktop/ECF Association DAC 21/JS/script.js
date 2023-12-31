console.log('Hello ECf');

console.log('my first Site ever bRO');

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('je-mattache', window.scrollY > 120);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

// Y'aura certainement des BUGS sur du JS .. ce block ne me demande pas du JS (en tous cas ^_^) j'ai voulu faire un site sympa
// mais je bloque dans quelques parties faute d'expérience et C NORMAL ^_^

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
};

// et même si il reize .... ba ça va faire pareil ^_^
// bonus une deuxième possibilité pour déclencher les evenements en js
window.addEventListener('resize', () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('active');
});

/*** mon exitation est super clair du fait  d'attquer DU VRAIS JS
 * Observator intersecting ... asychrons destructering ... promisis .. hook (REact hhhhh ^_^)  */
