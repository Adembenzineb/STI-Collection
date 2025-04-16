function verif() {
    let ps = document.getElementById("pseud").value;
    let mail = document.getElementById("email").value;
    let psw = document.getElementById("mdp1").value;
    let psw_r = document.getElementById("mdp2").value;
    let rb1 = document.getElementById("re").checked;
    let rb2 = document.getElementById("rp").checked;

    if (ps == "" || alphanum(ps) == false || !(ps[0].toUpperCase() >= "A" || ps[0].toUpperCase() <= "Z")){
        alert("Verifier saisir votre Pseudonyme")
        return false
    }
    if ( mail == "" || mail.substring(mail.length-3,mail.length) != ".tn" ){
        alert("Verifier saisir votre Email")
        return false
    }
    if (psw == "" || psw_r == "" || psw != psw_r) {
        alert("Verifier saisir votre Mot de passe")
        return false
    }
    if (rb1 == false &&  rb2 == false){
        alert("Vous devew choisir une bouton radio")
        return false
    }

    return true

}
function alphanum(ch) {
    i = 0
    ch = ch.toUpperCase()
    while ( i < ch.length && ((ch[i] >= "A" && ch[i] <= "Z")||(ch[i] >= "0" && ch[i] <= "9")) ){
        i++
    }
    return i == ch.length
}