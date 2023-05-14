function lol() {
    const pass_text = document.getElementById("pass-text");
    let pass = "";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()_+-={}[]|;:'<>?,./";
    for(let i = 0; i < 64; i++) {
        //
        let rand = Math.floor(Math.random() * characters.length);
        pass += characters.substring(rand, rand + 1);
    }
    pass_text.innerText = pass;
}

window.addEventListener('load', lol)