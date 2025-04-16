function Cree_email(){
    n = document.getElementById("nom").value;
    pn = document.getElementById("prenom").value;

    rsh = document.getElementById("sh").checked;
    rsy = document.getElementById("sy").checked;
    rsg = document.getElementById("sg").checked;

    rdt = document.getElementById("dt").checked;
    rdf = document.getElementById("df").checked;
    rdc = document.getElementById("dc").checked;

    if (n == "" || majus(n) == false){
        alert("Veuiller saisir votre nom")
    }
    if (pn == "" || majus(pn) == false){
        alert("Veuiller saisir votre prenom")
    }
    let mail = n+"."+p+"@" ;

    if (rsh == true){
        mail += "hotmail."
    }else if (rsy == true){
        mail += "yahoo."
    }else if (rsg == true){
        mail += "gmail."
    }

    if (rdt == true){
        mail += "tn"
    }else if (rdf == true){
        mail += "fr"
    }else if (rdc == true){
        mail += "com"
    }

    document.getElementById("mail").innerHTML= mail;


}

function majus(ch) {
    i == 0
    while (i < ch.length && !(ch[i] <= "Z" && ch[i] >= "A")){
        i++
    }
    return i == ch.length
    
}