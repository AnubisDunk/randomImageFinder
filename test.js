
let counter = 0;
let all = 0;
let limit = 100;

const linkBase = document.querySelector("#linkBase");
const linkInput = document.querySelector("#linkInput");
const linkLink = document.querySelector("#linkLink");
const formSubmit = document.querySelector("#linkCreate")
const div = document.querySelector("#content")
const info = document.querySelector("#info")

let linkConstruct = "";
let num = 0;

function updateValue(e) {
    linkConstruct = e.target.value;
    linkBase.textContent = checkRand(linkConstruct);
}
const checkRand = (link) => {
    if (link.includes("random")) {
        num = link[link.indexOf("random") + 6];
        cutter = (link[link.indexOf("random") + 6])
        newLink = link.replace(`random${cutter}`, "#@!");
        return newLink.trim();
    }
    return link;
}
//tick();


function handleSubmit(e) {
    e.preventDefault();
    let linkTemp = "https://" + linkBase.textContent;
    // while (counter <= 1 || all < 5000) {
    //     searchImg(linkTemp);
    //     all++;
    // }
    for (i = 0; i < 1000; i++) {
        searchImg(linkTemp);
        all++;
    }


}
async function searchImg(link) {
    newLink = link.replace("#@!", randomImage(num))
    //console.log(newLink);
    const img = document.createElement("img")
    img.src = newLink;
    img.onload = await function () {
        console.log(img.naturalHeight);
        info.textContent = `${counter}/${all}`;
        if (img.naturalHeight != 81) {
            img.width = 100;
            img.alt = img.src
            div.appendChild(img);
            counter++;
        }
    }
}
//i.imgur.com/random7.png
// function tick() {
//     const img = document.createElement("img")
//     img.src = `https://i.imgur.com/${randomImage(7)}.jpeg`
//     img.onload = function () {
//         console.log(img.naturalHeight)
//         if (img.naturalHeight != 81) {
//             img.width = 100;
//             img.alt = img.src
//             div.appendChild(img);
//             tick();
//             counter++;
//         }
//         if (counter < 10) {
//             tick();
//         }
//     }

// }

function randomImage(length) {
    let result = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charLenght = characters.length

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charLenght))
    }
    return result
}

linkInput.addEventListener('input', updateValue);
formSubmit.addEventListener('submit', handleSubmit)