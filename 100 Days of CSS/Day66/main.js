const btn=document.querySelector('.btn');
const sparkles  = document.querySelector('.sparkles');


btn.addEventListener('click', () => {
    btn.classList.toggle('click');
    sparkles.classList.toggle('big')
})