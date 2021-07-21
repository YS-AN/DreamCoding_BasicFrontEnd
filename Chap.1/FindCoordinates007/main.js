//마우스에 따라 타겟과 라인이 동적으로 따로오도록 만듦

//dom요소를 변수에 할당
//굳이 다른 거로 변환할 이유 없기 때문에 상수(const)로 할당함
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', () => {
    //console.log(`move ${event.clientX}, ${event.clientY}`);
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.left = `${x}px`; //vertical 안에 style 안에 left에 x값 + px 지정
    horizontal.style.top = `${y}px`;
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `(${x}px, ${y}px)`;
});