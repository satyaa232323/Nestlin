// login
const txUsername = document.querySelector('#username');
const txPassword = document.querySelector('#password');
const btnSubmit = document.querySelector('#btSubmit');


btnSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  if(txUsername.value == 'admin' && txPassword.value == 'admin'){
    window.location.href = "index.html";
  }
});
// endlogin

// btn masuk

