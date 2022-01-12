// function plus(){
//     console.log(2+3);
// }

// plus();

// /* 함수 정의 */
// function plus(num1,num2){
//     console.log(num1+num2);
// }
// //함수 호출
// plus(2,3);

/* 변수 생성 */
const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

/* 버튼 개수만큼 반복 */
for (let i = 0; i < btns.length; i++) {
    /* 버튼 클릭시 함수 호출 */
    btns[i].addEventListener("click", e=>{
        activation(i, btns);
        activation(i, boxs);
    })
    
}
function activation(index, list) {
    for(let el of list) {
        el.classList.remove("on");
    }
    list[index].classList.add("on");
}