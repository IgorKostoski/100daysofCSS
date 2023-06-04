const dismiss = document.getElementById('dismiss');
const card = document.querySelector('.card');

dismiss.addEventListener('click', () => {
	card.classList.remove('show');
	card.classList.add('hide');
})