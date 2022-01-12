const wrap = document.querySelector("#wrap");
const box = document.querySelector("article");

/* wrap.addEventListener("click", ()=>{
    box.style.backgroundColor ="hotpink";
}); */

/* 속성 값을 변경x 배경색 제어 */
// wrap.addEventListener("click", () => {
//     wrap.classList.add("on");
// });

/* 색상 변경 on/off */
// wrap.addEventListener("click", () => {
//     let isOn = wrap.classList.contains("on");
//     console.log(isOn);
//     wrap.classList.add("on")
// });

/* 조건문 사용 분기 처리 */
// wrap.addEventListener("click", ()=>{
//     let isOn = wrap.classList.contains("on");
//     console.log(isOn);

//     if(isOn){
//         wrap.classList.remove("on");
//     }else {
//         wrap.classList.add("on");
//     }
// });

/* 토글 사용 */
wrap.addEventListener("click", ()=>{
    wrap.classList.toggle("on");
});