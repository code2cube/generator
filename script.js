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

    const port_text = document.getElementById("server-port");
    let port = "";
    port += Math.floor(Math.random() * 5);
    for(let i = 0; i < 4; i++) {
        port += Math.floor(Math.random() * 9)
    }
    port_text.innerText = port;
}

window.addEventListener('load', lol)