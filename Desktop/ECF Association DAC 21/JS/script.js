console.log('Hello ECf');

const header = document.querySelector('header');
console.log(header);

window.addEventListener('scroll', () => {
  header.classList.toggle('je-mattache', window.screenY > 120);
});
