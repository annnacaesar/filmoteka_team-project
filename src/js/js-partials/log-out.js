const btnLogOut = document.querySelector('.nav__form-log-out');

btnLogOut.addEventListener('submit', (e) => {
	sessionStorage.removeItem('sign-in');
});
