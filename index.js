const app = () => {
    ques.map((e, index) => {
        let h1 = document.createElement("h1");
        h1.innerHTML = `${e.ques}`;
        let btn1=document.createElement('button');
        btn1.innerHTML=`${e.opta}`
        let btn2=document.createElement('button');
        btn2.innerHTML=`${e.optb}`
        let btn3=document.createElement('button');
        btn3.innerHTML=`${e.optc}`
        let btn4=document.createElement('button');
        btn4.innerHTML=`${e.optd}`
    })

    btn1.addEventListener("click", () => {ans(index, e.opta, btn1);});
    btn2.addEventListener("click", () => {ans(index, e.optb, btn2);});
    btn3.addEventListener("click", () => {ans(index, e.optc, btn3);});
    btn4.addEventListener("click", () => {ans(index, e.optd, btn4);});

}


const question =(e)=>{
    e.preventDefault();

    let ques = document.querySelector("ques").value;
    let opta = document.querySelector("opta").value;
    let optb = document.querySelector("optb").value;
    let optc = document.querySelector("optc").value;
    let optd = document.querySelector("optd").value;
}