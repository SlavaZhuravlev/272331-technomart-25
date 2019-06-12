var buy = document.querySelector('.buy');
var adding = document.querySelector('.modal-adding');
var closeAdding = adding.querySelector('.modal-close');
var continueAdding = adding.querySelector('.modal-continue');

buy.addEventListener('click', function (evt) {
  evt.preventDefault();
  adding.classList.add('modal-show');
});

closeAdding.addEventListener('click', function (evt) {
  evt.preventDefault();
  adding.classList.remove('modal-show');
});

continueAdding.addEventListener('click', function (evt) {
  evt.preventDefault();
  adding.classList.remove('modal-show');
});

window.addEventListener('keydown', function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (adding.classList.contains('modal-show')) {
      adding.classList.remove('modal-show');
    }
  }
});
