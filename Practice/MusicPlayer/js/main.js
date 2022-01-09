const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
/* 8개의 article을 360으로 나눈 값 =각도 */
const deg = 45;
/* 순번이 0부터 시작해서 전체에서 -1빼기 */
const len = lists.length-1;

/* 변수 초기화 */
let i = 0;

for (let el of lists) {
    let pic = el.querySelector(".pic");

    el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
    /* 배경 이미지 추가 */
    pic.style.backgroundImage = `url(img/member${i+1}.jpg)`;
    i++;
}