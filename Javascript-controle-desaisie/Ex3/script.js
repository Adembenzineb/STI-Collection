function verif1(){
    p = document.getElementById("per").value;
    n = document.getElementById("nom").value;
    pn = document.getElementById("prnom").value;
    rf = document.getElementById("fem").checked;
    rm = document.getElementById("mas").checked;

    if (verif_permis(p) == false || p == "" ){
        alert("Veuiller saisir permis correctement")
        return false
    }
    if( n.length > 20 || n.length < 3 || alpha(n) == false){
        alert("le nom est Une chaîne alphabétique ayant une longueur comprise entre 3 et 20")
        return false
    }
    if( pn.length > 20 || pn.length < 3 || alpha(pn) == false){
        alert("le prenom est Une chaîne alphabétique ayant une longueur comprise entre 3 et 20")
        return false
    }
    if(rf == false && rm == false){
        alert("La sélection d’un genre est obligatoire.")
        return false
    }

    return true

}
function verif_permis(p){
    let l = p.length
    if (l != 8){
        return false
    }
    let pslash = p.indexOf("/");
    if (pslash != 2){
        alert("Une chaîne de 8 caractères respectant le format suivant :xx/xxxxx")
        return false
    }

    ch1 = p.substring(0,2)
    ch2 = p.substring(3,p.length)
    if (num(ch1) == false || num(ch2) == false){
        alert("la chaine permis dois etre numerque")
        return false
    }
    return true
}

function num (ch){
    i = 0
    while (i < ch.length && (ch[i] <= "9" && ch[i] >= "0" )){
        i ++
    }
    return i == ch.length
}
function alpha (ch){
    i = 0
    while (i < ch.length && (ch[i] <= "Z" && ch[i] >= "A" )){
        i ++
    }
    return i == ch.length
}