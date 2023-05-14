function lol() {
    const pass_text = document.getElementById("pass-text");
    const pass_length = document.getElementById("char_length_input").value;
    console.log(pass_length);
    let pass = "";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~`!@#$%^&*()_+-={}[]|;:'<>?,./";
    for(let i = 0; i < pass_length; i++) {
        //
        let rand = Math.floor(Math.random() * characters.length);
        pass += characters.substring(rand, rand + 1);
    }
    pass_text.innerText = pass;
}