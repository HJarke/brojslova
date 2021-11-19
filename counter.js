const txt = document.querySelector(".txt");
const right = document.querySelector(".right");


let arra = [];
const pun = `[!"#$%&'()*“”+,-./:;´<=>?@[^_{|}~] ` + "`\\" + "\n";
const punn = pun.split("");
let para = document.createElement("p");
para.textContent = "Ukupno: " + arra.length + "  Ukupno reci: 0";
right.appendChild(para);
let para2 = document.createElement("p");
para2.textContent = "";
right.appendChild(para2);

txt.addEventListener("input", () => {
    para2.innerHTML = "";
    let str = (txt.value).toUpperCase();
    arra = str.split(" ");
    let arraChars = new Set(str);
    arraChars.forEach((value) => {
        if(!(punn.includes(value))) {
            para2.innerHTML += "|" + value + ": " + (str.split(value).length-1) + "| ";
        }
    });
    if(txt.value == "") {
        arra = [];
    }
    para.textContent = "Ukupno karaktera: " + str.length + " Ukupno reci: " + arra.length;
});
