/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//import {$sel} from "";
"use strict";
import {togglePower} from "./ui.js";
$(document).ready(() => {
    $("")
    
});
const toggleSelTerminal = function () {
    var te = document.getElementById("terminal-sel");
};

function onLoad() {
    //    const urlp = 
};
async function run(cmd, debug) {

};
function toggleTerminal() {
    document.getElementById('terminal-sel').innerHTML = document.getElementById('terminal-sel').value;
    document.querySelector("#terminal h2 data")[0].value = document.getElementById('terminal-sel').value;
    document.querySelector("#terminal h2 data")[0].innerHTML = document.getElementById('terminal-sel').innerHTML;

}
function RegisterHandlers() {
    document.getElementById("#selterm").onchange(evt => {
        toggleTerminal();
        evt.preventDefault();
    });
}

//document.getElementById("power").addEventListener('click',togglePower);
//document.addEventListener("")
