var write = document.querySelector('.company-btn');
var popup = document.querySelector('.modal-message');
var close = popup.querySelector('.modal-close');
var name = popup.querySelector('[name=name]');
var email = popup.querySelector('[name=email]');
var form = popup.querySelector('form');
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-message-show');
  if (storage) {
    name.value = storage;
    email.focus();
  } else {
    name.focus();
  }
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-message-show');
  popup.classList.remove('modal-message-error');
});

form.addEventListener('submit', function (evt){
  if (!name.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove('modal-message-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-message-error')
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', name.value);
    }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-message-show')) {
      popup.classList.remove('modal-message-show');
      popup.classList.remove('modal-message-error');
    }
  }
});
