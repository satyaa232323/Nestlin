const txUsername = document.querySelector("#username");
const txPassword = document.querySelector("#password");
const btnSubmit = document.querySelector("#btSubmit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  // Verifikasi login dengan username dan password yang benar
  if (txUsername.value === "admin" && txPassword.value === "admin") {
    alert("Berhasil Login");
    window.location.href = "landingpage.html"; // Mengarahkan ke halaman index.html setelah login berhasil
  } else {
    alert("Username atau Password Salah");
  }
});
