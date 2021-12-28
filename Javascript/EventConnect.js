/* 1 */
const link = document.querySelector("a");

link.addEventListener("click", ()=>{
    console.log("링크를 클릭했습니다.");
});

const link1 = document.querySelector("a");

link1.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("링크를 클릭했습니다.");
});

/* 2 */
const box = document.querySelector("#box");

box.addEventListener("mouseenter", ()=>{
    box.style.backgroundColor = "hotpink";
});
box.addEventListener("mouseleave", ()=>{
    box.style.backgroundColor = "aquamarine"
});

/* 3 */
const list = document.querySelectorAll(".list li");

for(let el of list){
    el.addEventListener("click", e=>{
        e.preventDefault();
        console.log(e.currentTarget.innerText);
    })
}

/* 4 */
// const btnPlus = document.querySelector(".btnPlus");
// const btnMinus = document.querySelector(".btnMinus");
// let num = 0; //제어할 숫잣값 0으로 초기화

// btnPlus.addEventListener("click", e=>{
//     e.preventDefault();
//     //num값을 1씩 증가
//     num++;
//     console.log(num);
// });
// btnMinus.addEventListener("click", e=>{
//     e.preventDefault();
//     //-1 감소
//     num--;
//     console.log(num);
// });

/* 5 문자 안 변수 삽입 */
const myName = "이나경";
console.log(`내 이름은 ${myName}입니다.`);

/* 6 */
//변수 생성
const btnLeft = document.querySelector(".btnLeft");
const btnRight = document.querySelector(".btnRight");
const box1 = document.querySelector("#box1");
const deg = 45; //각도
let num = 0; //0으로 초기화

//btnLeft 할 때 마다 감소
btnLeft.addEventListener("click", e=>{
    e.preventDefault();
    num--;
    //45도 각도에 감소된 num 값을 deg와 곱해 rotate구문에 삽입 (=>-1당 -45도 감소)
    box1.style.transform= `rotate(${num * deg}deg)`;
});

//증가
btnRight.addEventListener("click", e=>{
    e.preventDefault();
    num++;
    box1.style.transform= `rotate(${num * deg}deg)`;
});

