/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */
//import {togglePower} from '../../../src/ui.js';
//const ui = require("../../src/ui.js");
//const os = require("../src/os.js");

//const togglePower = function () {
//    var data = $("#terminal data").val();
//    var power = document.getElementById("terminal").class;
//    if (power === 'off') {
//        power = 'on';
//
//    } else if (power === 'on') {
//        power = 'off';
//    }
//};
$(document).ready(() => {
    $("#selterm").change(evt => {
        let tnum = $("#selterm").val();
        $("#term").val(tnum);
        $("#term").text(tnum);
        evt.preventDefault();
    });
    document.getElementById("selterm").onchange = () => {
        var s = document.getElementById("selterm").value;
        
        $("term").val(s);
        $("term").text(s);
    };
    document.getElementById("selterm").onchange = (evt) => {
        let d = parseInt($("connect").val());
        switch (d) {
            case - 1:
                $("#connect").text('Not Connected');
                break;
            case 0:
                $("#connect").text('Connecting...');
                break;
            case 1:
                $("#connect").text('Connected');
                break;
            case 2:
                $("#connect").text('C0#n3c7eD_');
                break;
            default:
                $("#connect");
                evt.preventDefault();
        }
        ;
        $("#power").click(evt => {

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
            evt.preventDefault();
        });
    }
});
