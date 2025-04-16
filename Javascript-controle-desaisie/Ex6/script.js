function verif1(){
    n = document.getElementById("nom").value;
    pn = document.getElementById("prenom").value;
    t = document.getElementById("tell").value;
    dr = document.getElementById("adr").value;
    ps1 = document.getElementById("mdp1").value;
    ps2 = document.getElementById("mdp2").value;

    if ( alpha(n) == false || n.length < 3 ){
        alert("Veuillez saisir votre nom")
        return false
    }
    if ( alpha(pn) == false || pn.length < 3 ){
        alert("Veuillez saisir votre prenom")
        return false
    }
    if ( numer(t) == false || Number(t[0]) <= 1 || t.length != 8){
        alert("Veuillez saisir votre telephone")
        return false
    }
    if( dr.length < 10 ){
        alert("L adresse de taille minimum 10")
        return false
    }
    if(mdp1.indexOf(" ") != -1 || mdp1.length != 6 ){
        alert("Votre mot de passe doit etre sans espace et 6 caractere")
        return false
    }
    if(mdp1 != mdp2){
        alert("confirmer voter mot de passe correctement")
        return false
    }

    return true

}
function alpha(ch){
    ch = ch.toUpperCase();
    i = 0
    while ( i < ch.length && ch[i] >= "A" && ch[i] <= "Z"){
        i ++
    }
    return i == ch.length
}

function numer(ch){
    i = 0
    while ( i < ch.length && ch[i] >= "0" && ch[i] <= "9"){
        i ++
    }
    return i == ch.length
}