const div = document.createElement("div")
div.classList.add("wrapper");
const body = document.body;
body.appendChild(div);

const header = document.createElement("h1")
header.textContent = "Dom"
div.insertAdjacentElement("beforebegin", header)

let counter = 0;
let limit = 100;
let isLoading = false;
//for (let i = 0; i < limit; i++) {
//if (!isLoading) {
tick();
//}
//}

function tick() {
    const img = document.createElement("img")
    img.src = `https://i.imgur.com/${randomImage(7)}.jpeg`
    img.onload = function () {
        console.log(img.naturalHeight)
        if (img.naturalHeight != 81) {
            img.width = 100;
            img.alt = img.src
            img.addEventListener("click", imageClick)
            img.addEventListener("mouseout", imageOut)
            div.appendChild(img);
            tick();
            counter++;
        }
        if (counter < 10) {
            tick();
        }
    }



}
function imageClick(event) {
    console.log(event.target)
    let img = event.target;
    img.width = 800;
}
function imageOut(event) {
    let img = event.target;
    img.width = 100;
}

function randomImage(length) {
    let result = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLenght = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLenght))
    }
    return result
}
