/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */


/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */

//import TypeIt from "typeit";
import TypeIt from "typeit";
import "./ui.js";
const main = ()=>{
    
};
async function boot(){
    clear(); 
    await ("Hello World");
}

function pause(s = 1) {
    return new Promise(resolve => setTimeout(resolve, 1000 * Number(s)));
}
function input(value) {
    return new Promise(resolve => {
        const onKeyDown = event => {
            if (event.keyCode === 13) {
                event.preventDefault();
                let result = event.target.textContent;
                resolve(result);
            }
        };

        let terminal = document.querySelector(".terminal");
        let input = document.createElement("div");
        input.setAttribute("id", "input");
        input.setAttribute("contenteditable", true);
        input.addEventListener("keydown", onKeyDown);
        terminal.appendChild(input);
        input.focus();
    });};
export {boot,input,pause};
export default main;