/* 
 * Terminal-XXX
 * By Elena Miller
 * 
 */

const togglePower = function(){
    
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
    document.getElementById("selterm").onchange = (evt) => {
        var s = document.getElementById("selterm").value;
        $("term").val(s);
        $("term").text(s);
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
                $("#connect");
                break;

                
        }
        evt.preventDefault();
    } ;
//        document.getElementById("power").onclick = (evt)=>{
//            
//            var p = document.getElementById("crt");
//            if (p.classList.contains("off")) {
//                p.classList.replace("off", "on");
//                $("#connect").val("0");
//                var w = 0;
//                while (w > 10){
//                    w++;
//                }
//                $("#connect").val("1");
//
//            } else if (p.classList.contains("on")) {
//                p.classList.replace("on", "off");
//                $("#connect").val("-1");
//            }
//            evt.preventDefault();
//        };
        $("#power").click(evt => {

            var p = document.getElementById("crt");
            if (p.classList.contains("off")) {
                p.classList.replace("off", "on");
                $("#connect").val("0");
                var w = 0;
                while (w > 10){
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
   
});