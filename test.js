
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

async function handleSubmit(e) {
    e.preventDefault();
    for (i = 0; i < 1000; i++) {
        await searchImg(linkInput.value);
        all++;
    }
    console.log("finished");
}
function searchImg(ext) {
    return new Promise((res, rej) => {
        src = `https://imgur.com/${randomImage(7)}.${ext}`
        const img = document.createElement("img");
        img.addEventListener('load', () => {
            console.log('Loading')
            info.textContent = `${counter}/${all}`;
            if (img.height != 81 && img.width != 161) {
                img.width = 100;
                img.addEventListener('click', (e) => {
                    window.open(e.currentTarget.src);
                })
                div.appendChild(img);
                counter++;
            }
        });
        img.setAttribute('src', src);
        res();
    })
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
