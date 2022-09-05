const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
let passwordValue = '';
let confirmPasswordValue = '';

password.addEventListener('change', e => {
  passwordValue = e.target.value;
  comparePasswords();
});

confirmPassword.addEventListener('change', e => {
  confirmPasswordValue = e.target.value;
  comparePasswords();
});

function comparePasswords() {
  if (passwordValue === confirmPasswordValue && passwordValue.length >= 5) {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');

  } else if ((passwordValue !== confirmPasswordValue) && !(password.classList.contains('error'))) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    }
  return;
}
