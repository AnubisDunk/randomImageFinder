
let counter = 0;
let all = 0;
let limit = 100;

const linkInput = document.querySelector("#ext");
const formSubmit = document.querySelector("#linkCreate")
const div = document.querySelector("#content")
const info = document.querySelector("#info")

let linkConstruct = "";
let num = 0;

function updateValue(e) {
    linkConstruct = e.target.value;
    linkBase.textContent = checkRand(linkConstruct);
}

function handleSubmit(e) {
    e.preventDefault();

    for (i = 0; i < 1000; i++) {
        searchImg(linkInput.value);
        all++;
    }
}
async function searchImg(ext) {
    newLink = `https://imgur.com/${randomImage(7)}.${ext}`
    const img = document.createElement("img")
    img.src = newLink;
    img.onload = await function () {
        console.log(img.naturalHeight);
        info.textContent = `${counter}/${all}`;
        if (img.naturalHeight != 81) {
            img.width = 100;
            img.alt = img.src;
            img.addEventListener('click', (e) => {
                window.open(e.currentTarget.src);
            })
            div.appendChild(img);
            counter++;
        }
    }
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
formSubmit.addEventListener('submit', handleSubmit)