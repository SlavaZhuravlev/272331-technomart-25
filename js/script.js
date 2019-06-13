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
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (adding.classList.contains('modal-show')) {
      adding.classList.remove('modal-show');
    }
  }
});


var mapButton = document.querySelector('.contacts-button-map');
var map = document.querySelector('.modal-map');
var mapClose = map.querySelector('.modal-close');

mapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  map.classList.add('modal-show')
});

mapClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  map.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (map.classList.contains("modal-show")) {
      map.classList.remove('modal-show');
    }
  }
});


var write = document.querySelector('.company-btn');
var message = document.querySelector('.modal-message');
var close = message.querySelector('.modal-close');
var loginForm = message.querySelector('[name=name]');
var email = message.querySelector('[name=email]');
var form = message.querySelector('form');
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener('click', function (evt) {
  evt.preventDefault();
  message.classList.add('modal-show');
  if (storage) {
    loginForm.value = storage;
    email.focus();
  } else {
    loginForm.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  message.classList.remove('modal-show');
  message.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt){
  if (!loginForm.value || !email.value) {
    evt.preventDefault();
    message.classList.remove('modal-error');
    message.offsetWidth = message.offsetWidth;
    message.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('loginForm', loginForm.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (message.classList.contains('modal-show')) {
      message.classList.remove('modal-show');
      message.classList.remove('modal-error');
    }
  }
});
