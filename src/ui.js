/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//import { input, type } from "./os.js";

/** Turn on */
function on() {
$("#term-content");
}
/** turn off */
function off() {

}
exports.handleClick = function (evt) {

};
exports.clear = function (){
    $("#term-content *").remove("*");
};
//function togglePower(){
//    let p = document.querySelector("#power")[0];
//    if (p.hasAttribute("style")){
//        if (p.style.color ==="black"){
//            p.style.color ==="green";
//        }else if(p.style.color ==="green"){
//            p.style.color ==="black";
//        }
//    }
//    let screen = document.getElementById("term-body");

//}
exports.globalListener = function ({ keyCode }) {

};
function output(text) {
    var container = document.getElementById("output");
    if (!container) {
        container = document.createElement("div");
        container.id = "output";
        container.className = "type";
    }
    for (const t of text){
        container.innerHTML +=t;
    }
//    container.innerHTML += text;

}
function addHandlers() {
//    document.addEventListener("keydown", globalListener);
//    document.getElementById("power").addEventListener('click', togglePower);

}
exports.togglePower = function(){
     var p = document.getElementById("terminal");
    if (p.classList.contains("off")) {
        p.classList.replace("off", "on");
        $("#connect").val("0");
        wait(10000);
        $("#connect").val("1");
    } else if (p.classList.contains("on")) {
        p.classList.replace("on", "off");
         $("#connect").val("0");
    }
};
//export { togglePower, addHandlers, globalListener };
