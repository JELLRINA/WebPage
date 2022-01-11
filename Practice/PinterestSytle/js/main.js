
// 페이지 로드 이벤트
/* 윈도우요소(브라우저)에 load이벤트 연결 */
window.addEventListener("load", ()=>{
    const grid = new Isotope("section", { //배치할 요소를 감사고 있는 부모 요소명
        itemsSelector: "article", //배치할 요소명
        cloumnWidth: "article", //너빗값을 구할 요소명
        transitionDuration: "0.5s"  //화면 재배치 시 요소가 움직이는 속도
    });
});