const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audio = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
/* 8개의 article을 360으로 나눈 값 =각도 */
const deg = 45;
/* 순번이 0부터 시작해서 전체에서 -1빼기 */
const len = lists.length - 1;

/* 변수 초기화 */
let i = 0;

for (let el of lists) {
  let pic = el.querySelector(".pic");

  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  /* 배경 이미지 추가 */
  pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
  i++;

  /* 재생 정지 처음부터 재생 버튼을 변수 저장 */
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  /* play 버튼 클릭 시 */
  play.addEventListener("click", e=>{
    /* paly 버튼부터 .pic요소까지 탐색 후 클래스 on 추가하여 활성화 */
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    /* paly 버튼부터 audio 요소까지 탐색 후 음악 재생 */
    e.currentTarget.closest("article").querySelector("audio").play();
  });
  /* pause 버튼 클릭 시 */
  pause.addEventListener("click", e=>{
    /* 정지 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 제거해 비활성화 */
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
  });
  /* load 버튼 클릭 시 */
  load.addEventListener("click", e=>{
    /* load 버튼 부터 .pic요소까지 탐색 후 클래스 on 추가해 활성화 */
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    /* load 버튼부터 audio 요소까지 탐색 후 음악 로드 후 재 실행 */
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  });
}
