// // login
// const txUsername = document.querySelector('#username');
// const txPassword = document.querySelector('#password');
// const btnSubmit = document.querySelector('#btSubmit');

// const btLogin = document.getElementById('#btLogin');

// btnSubmit.addEventListener('click', (e) => {
//   e.preventDefault();

//   if(txUsername.value == 'admin' && txPassword.value == 'admin'){
//     window.location.href = "index.html";
//   }
// });
// // endlogin

// function login(){
//     window.location.href = "login.html";
 
// }


// Navbar Responsive
const navToggle = document.getElementById('nav-toggle');
const navbar = document.querySelector('.navbar');

// Add event listener to toggle the navbar visibility
navToggle.addEventListener('click', () => {
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
});