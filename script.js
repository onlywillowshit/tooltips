let sqr = document.createElement("div");
sqr.style.width = "100px";
sqr.style.height = "50px";
//sqr.style.transform = "translate(+1000px)";
sqr.style.backgroundColor = "black";
let c = document.body.appendChild(sqr);
let cx1 = c.getBoundingClientRect().x;
c.setAttribute("title", "Черный прямоугольник №1");

let sqr2 = document.createElement("div");
sqr2.style.width = "100px";
sqr2.style.height = "50px";// 
sqr2.style.margin = "100px";
sqr2.style.backgroundColor = "black";
let d = document.body.appendChild(sqr2);
let dx1 = d.getBoundingClientRect().x;
d.setAttribute("title", "Черный прямоугольник №2");

let sqr3 = document.createElement("div");
sqr3.style.width = "100px";
sqr3.style.height = "50px";
sqr3.style.transform = "translate(+150px)";
sqr3.style.margin = "100px";
sqr3.style.backgroundColor = "black";
let e = document.body.appendChild(sqr3);
let ex1 = e.getBoundingClientRect().x;
e.setAttribute("title", "Черный прямоугольник №3");

// let l = window.screen.availWidth - Number(String(window.getComputedStyle(document.body).getPropertyValue('margin-left'))[0]);
// console.log(l - cx1);
// console.log(l - dx1);
// console.log(l - ex1);

// console.log(window.getComputedStyle(document.body).getPropertyValue('margin-left'));

// if(l-cx1 > 1300){
//   c.setAttribute("title", "Тевирп");
//} else {
//   c.setAttribute("title", "Привет");
//}
//
//if(l-dx1 > 1300){
//d.setAttribute("title", "Тевирп");
//} else {
//d.setAttribute("title", "Привет");
//}
//
//if(l-ex1 > 1300){
//    e.setAttribute("title", "Тевирп");
//} else {
//    e.setAttribute("title", "Привет");
//}
//
//class ToolTip{
//    constructor(text, el){
//        text = this.text;
//        el = this.el;
//    }
//
//    showToolTip() {
//        
//    }
//}