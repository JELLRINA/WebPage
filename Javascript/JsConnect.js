// const title = document.querySelector("#title");
// console.log(title);

// 1

const frame = document.querySelector("#wrap");
console.log(frame);

const box1 = document.querySelector("#wrap .box1");
console.log(box1);

// const items = document.querySelector("#wrap article");
// console.log(items);

// // 요소 전체 선택은 되지만 묶음으로처리됨
// const items = document.querySelectorAll("#wrap article");
// console.log(items);

// // 반복문
// 1
const items1 = document.querySelectorAll("#wrap article");

for (let item of items1) {
  console.log(item);
}

// 2
const items2 = document.querySelectorAll("#wrap article");

for (let i = 0; i < items2.length; i++) {
  console.log(items2[i]);
}

// 2
//자식 요소 선택
const list = document.querySelector(".list");
const items3 = list.children;

console.log(items3);
console.log(items3[0]);
console.log(items3[1]);
console.log(items3[2]);
console.log(items3[3]);

// 직계 부모 요소 선택
const item2 = document.querySelector(".item2");
console.log(item2.parentElement);

//3
//상위 부모 요소 선택
const li = document.querySelector("li");
console.log(li.closest("main"))

//형제 요소 선택
const item3 = document.querySelector(".item3");
console.log(item3.previousElementSibling);
console.log(item3.nextElementSibling);