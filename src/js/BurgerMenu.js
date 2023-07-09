const navBtn = document.querySelector('.BurgerBtn');
const nav = document.querySelector('.mobile-nav');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function() {
  nav.classList.toggle('mobile-nav--open');
  fade.classList.toggle('mobile-nav-fade-open');
  document.body.classList.toggle('no-scroll');
};

fade.onclick = function() {
  nav.classList.toggle('mobile-nav--open');
  fade.classList.toggle('mobile-nav-fade--open');
  document.body.classList.toggle('no-scroll');
}
