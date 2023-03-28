const resTag = document.querySelector(".res");
const inputTag = document.querySelector(".inp");
const cTag = document.querySelector(".counter");
const PlayRes = () => {
    //let res = ExecuteTask();
    //resTag.innerHTML = res
    if (inputTag.value === "") {
        resTag.innerHTML = "No Input"
    } else {
        ExecuteTask();
    }

}
const ClearRes = () => {
    resTag.innerHTML = ""
    cTag.innerHTML = ""
}
const ExecuteTask = () => {
    ClearRes();
    let flag = false;
    let counter = 0;
    for (let i = 0; i < 10000; i++) {
        counter++;
        cTag.innerHTML = `Counter: ${counter}`
        let guess = RandomString(3);
        resTag.innerHTML += guess + " ";
        if (guess === inputTag.value) {
            resTag.innerHTML += `GUESS. COUNTER: ${counter}`
            flag = true;
            break;
        }
    }
    if (!flag) {
        resTag.innerHTML += " ------------------ NO -------------"
    }
    //return RandomString(3);
}
const RandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}