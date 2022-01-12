
/* 아이디가 circle인 요소 찾아서 저장 */
const circle = document.querySelector("#circle");
/* 태그명이 article 인 요소 저장 */
const article = document.querySelectorAll("article");

/* article의 전체 개수만큼 반복>> mouseenter, mouseleave 이벤트 연결 */
for(let el of article) {
    /* article 에 마우스를 올리면 부모인 #circle 의 animation-play-state값을 "paused로 변경" */
    el.addEventListener("mouseenter",e=>{circle.style.animationPlayState = "paused";
});
    /* article 에서 마우스가 떠나면 부모인 #circle 의 animation-play-state값을 다시 "running"으로  변경" */
    el.addEventListener("mouseleave", e=>{
        circle.style.animationPlayState = "running";
    });
}