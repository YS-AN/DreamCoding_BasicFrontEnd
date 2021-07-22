const button = document.querySelector('button');
const rabbit = document.querySelector('#rabbit');

button.addEventListener('click', () => {
    rabbit.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //  스크롤 이동했을 때 화면의 맨위 : start, 중간 : center, 끝 : end 에 오도록 
});