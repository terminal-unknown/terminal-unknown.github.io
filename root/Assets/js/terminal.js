/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */

function checkElement(e) {

}
const togglePower = function () {

};
$(document).ready(() => {
    $("#selterm").change(evt => {
        let tnum = $("#selterm").val();
        $("#term").val(tnum);
        $("#term").text(tnum);
        evt.preventDefault();
    });
//    document.getElementById("selterm").onchange = () => {
//       
//    };
    document.getElementById("connect").onchange(evt => {
        let d = parseInt($("connect").val());
        switch (d) {
            case - 1:
                $("#connect").text('Not Connected');
                break;
            case 0:
                $("#connect").text('Connecting...');
                document.getElementById("power").setAttribute("disabled", "null");
                break;
            case 1:
                $("#connect").text('Connected');
                $("#power").text("Disconnect");
                break;
            case 2:
                $("#connect").text('C0#n3c7eD_');
                break;
            default:
                $("#connect").text('Connection Error. Try Again Later.');
                break;

        }
    });
    document.getElementById("selterm").onchange = (evt) => {

        var s = document.getElementById("selterm").value;
        var t = document.getElementById("power").innerHTML;
        var cstate = parseInt(document.getElementById("connect").value);
        if (cstate === 1) {
            $("#msg").text("Cannot Disconnect")
        } else {
            $("term").val(s);
            $("term").text(s);

        }

        evt.preventDefault();
    };

    $("#power").click(evt => {
        var e = document.getElementById("power");

        var p = document.getElementById("crt");
        if (p.classList.contains("off")) {
            p.classList.replace("off", "on");
            $("#connect").val("0");
            var w = 0;
            while (w > 10) {
                w++;
            }
            $("#connect").val("1");
            $("#power").text("Disconnect")
        } else if (p.classList.contains("on")) {
            p.classList.replace("on", "off");
            $("#connect").val("-1");
        }
        evt.preventDefault();
    });
    $("details summary").click(evt => {
        let e = document.getElementsByTagName("summary");
        let target = evt.currentTarget;
        for (var i = 0; i < e.length; i++) {
            if (e[i] !== target) {
                if (e[i].parentElement.hasAttribute("open")) {
                    e[i].parentElement.removeAttribute("open", null);
                }
            }
        }
    });
});