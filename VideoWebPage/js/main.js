/* 모든 article 요소를 변수 items에 저장 */
const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
/* aside 안족의 span 요소를 클릭 시 해당 패널 비활성화 변수 생성 */
const close = aside.querySelector("span");

/* article 요소의 개수만큼 반복 */
for (let el of items) {
    /* 현재 반복하는 article 요소에 mouseenter 이벤트 발생 */
    el.addEventListener("mouseenter" ,e=>{
        /* 자식 요소인 video 재생 */
        e.currentTarget.querySelector("video").play();
    });
    el.addEventListener("mouseleave", e=>{
        e.currentTarget.querySelector("video").pause();
    });
    el.addEventListener("click", e=>{
        /* article 요소안 제목 내용 비디오 요소의 src 값을 변수 저장 */
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        /* article >> aside 안 요소 실행 요소 */
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        /* aside 안 동영상 재생 및 on을 붙여 패널 활성화*/
        aside.querySelector("video").play();
        aside.classList.add("on");
    });
    /* close 버튼 클릭 시 */
    close.addEventListener("click", ()=>{
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    });
}