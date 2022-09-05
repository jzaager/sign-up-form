const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
let passwordValue = '';
let confirmPasswordValue = '';

// Check the value of password
// Check the value of confirmPassword
  // IF password === confirmPassword
    // remove the .error class from both

password.addEventListener('change', e => {
  passwordValue = e.target.value;
});

confirmPassword.addEventListener('change', e => {
  confirmPasswordValue = e.target.value;
  comparePasswords();
});


function comparePasswords() {
  if (passwordValue === confirmPasswordValue) {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  } else if ((passwordValue !== confirmPasswordValue) && !(password.classList.contains('error'))) {
    password.classList.add('error');
    confirmPassword.classList.add('error');
    }
  return;
}
