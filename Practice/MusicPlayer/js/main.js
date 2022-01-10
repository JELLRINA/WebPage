/* 2 */
const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
/* 5 버튼*/
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");
/* 6 */
const audio = frame.querySelectorAll("audio");

/* 2-2. 8개의 article을 360으로 나눈 값 =각도 */
const deg = 45;
/* 2-3. 순번이 0부터 시작해서 전체에서 -1빼기 */
const len = lists.length - 1;

/* 2-4. 변수 초기화 */
let i = 0;
// 버튼 초기화
let num = 0;
// 패널 초기화
let active = 0;

/* 회전 변수 함수 정의 */
// 모든 패널의 on 클래스 제거 1번째 인수 패널만 on 클래스 추가
function activation(index, lists) {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
}

/* 2-5 */
for (let el of lists) {
  let pic = el.querySelector(".pic");
  /* 각 article 요소를 45도씩 회전하고 아래로 배치 */
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  /* 배경 이미지 추가 */
  pic.style.backgroundImage = `url(img/member${i + 1}.jpg)`;
  i++;

  /* 4. 재생 정지 처음부터 재생 버튼을 변수 저장 */
  let play = el.querySelector(".play");
  let pause = el.querySelector(".pause");
  let load = el.querySelector(".load");

  /* play 버튼 클릭 시 */
  play.addEventListener("click", (e) => {
    /* article요소 탐색 후 해당 요소에 on 클래스 확인 후 결괏값 변수isAcitve에 저장 */
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    /* paly 버튼부터 .pic요소까지 탐색 후 클래스 on 추가하여 활성화 */
    if(isActive){
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    /* paly 버튼부터 audio 요소까지 탐색 후 음악 재생 */
    e.currentTarget.closest("article").querySelector("audio").play();
  }
  });
  /* pause 버튼 클릭 시 */
  pause.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    /* 정지 버튼부터 .pic 요소까지 탐색한 뒤 클래스 on 제거해 비활성화 */
    if(isActive){
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.remove("on");
    e.currentTarget.closest("article").querySelector("audio").pause();
    }
  });
  /* load 버튼 클릭 시 */
  load.addEventListener("click", (e) => {
    let isActive = e.currentTarget.closest("article").classList.contains("on");
    /* load 버튼 부터 .pic요소까지 탐색 후 클래스 on 추가해 활성화 */
    if(isActive){
    e.currentTarget
      .closest("article")
      .querySelector(".pic")
      .classList.add("on");
    /* load 버튼부터 audio 요소까지 탐색 후 음악 로드 후 재 실행 */
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
    }
  });
}

/* 모든 오디오 요소를 반복하면서 정지 
>> .pic 요소의 모션을 중지해서 초기화 함수 */
function initMusic(){
  // 오디오 변수 생성 저장
  for( let el of audio){
    el.pause();
    el.load();
    // 부모프레임의 이전요소인 pic 요소에서 on클래스를 제거
    el.closest("article").querySelector(".pic").classList.remove("on");
    /* el.parentElement.previousElementSibling.classList.remove("on"); */
  }
}

// 5. prev 버튼 클릭 시
prev.addEventListener("click", () => {
  /* 음악 초기화 함수 호출 */
  initMusic();
  /* num값을 증가시키며 frame 45도 만큼 증가시키며 시계 방향으로 계속 회전 */
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  /* 패널 순번이 0 이면 다시 마지막 패널의 순번으로 변경
  아니면 현재 패널 순번에서 1씩 감소시켜서 activation 함수 호출 */
  active == 0 ? (active = len) : active--;
  activation(active, lists);
});

// next 버튼 클릭 시
next.addEventListener("click", () => {
  initMusic();

  /* 1씩 감소 0도 >> 반시계방향 */
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  /* 패널 순번이 마지막이면 처음 패널 순번으로 변경
  아니면 현재 패널 순번에서 +1증가 activation 함수 호출 */
  active == len ? (active = 0) : active++;
  activation(active, lists);
});
