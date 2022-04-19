/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var inputx = [
    async function recieve(val) {

    },
];
async function input(value) {
    return new Promise((resolve) => {
        const onKeyPress = (evt) => {
            keycode = event.keyCode;
            var printable = false;
            if ((keycode > 47 && keycode < 58) || // number keys
                keycode === 32 || // spacebar & return key(s) (if you want to allow carriage returns)
                (keycode > 64 && keycode < 91) || // letter keys
                (keycode > 95 && keycode < 112) || // numpad keys
                (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
                (keycode > 218 && keycode < 223)) {
                printable = true;
            }
            if (evt.keyCode === 13) {
                evt.preventDefault();
                evt.target.setAttributeadmin("contenteditable", false);
                let result = evt.target.textContent.toLowerCase.trim();

            }

        };
        //       let typer = 

        return new Promise(async (resolve) => {

        });
    }, wait);
}
/**
 * adds typed command to history object
 * @param {String} value
 * @typedef {void}
 * @returns {undefined}
 */
function addHistory(value) {

}
/**
 * 
 * @param {String} char
 */
function getChar(char) {
    let result;
    if (typeof char === "string") {
        if (char === "\n") {
            result = document.createElement("br");
        } else if (char === "\t") {
            let tab = document.createElement("span");
            tab.innerHTML = "&nbsp;&nbsp;&nbsp;";
            result = tab;
        } else if (char === " ") {
            let space = document.createElement("span");
            space.innerHTML = "&nbsp;";
            space.classList.add("char");
            result = space;
        } else {
            let span = document.createElement("span");
            span.classList.add("char");
            span.textContent = char;
            result = span;
        }
    }
    return result;
}

/**
 * type text on screen
 * @param {String|Array<String>} text
 * @param {Element} container
 * @param {Number} waitval
 * @returns {undefined}
 */
function type(text, options = {}, container = document.querySelector("#term-content"), waitval) {
    //  await;  type("Welcome to TERMINAL #???",{initialWait: 3000});
    if (!text) return Promise.resolve();
    let { } = options;
    var span = document.getElementById("output");
    if (!span) {
        span = document.createElement("span");
        span.id = "output";
        span.setAttribute("class", "output");
        span.setAttribute("contenteditable", "true");
        span.innerHTML = "";
        document.querySelector("#term-content")[0].appendChild(span);
        //    span.contenteditable = ""
    }
    for (const t of text) {
        //        t.prototype.toUpperCase();
        if ((keycode > 47 && keycode < 58) || // number keys
            keycode === 32 || // spacebar & return key(s) (if you want to allow carriage returns)
            (keycode > 64 && keycode < 91) || // letter keys
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223)) {
            printable = true;
            document.querySelector("#output")
            // let element 
        }

    }

    container.querySelector("#output").innerHTML += span;
}
async function waitKey() {
    const handle = () => {
        document.addEventListener("keyup", handle);
    };
}
export { input, type, addHistory };