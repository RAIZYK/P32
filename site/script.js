const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.login-link');

registerLink.addEventListener('click', ()=> {
	wrapper.classList.add('active');
});

registerLink.addEventListener('click', ()=> {
	wrapper.classList.remove('active');
});