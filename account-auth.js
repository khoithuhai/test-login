const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const noidung = document.getElementById('noidung');

signUpButton.addEventListener('click', () => {
	noidung.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	noidung.classList.remove("right-panel-active");
});