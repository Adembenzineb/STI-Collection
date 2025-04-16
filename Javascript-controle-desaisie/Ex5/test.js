function verif(){
    numero = document.getElementById("num").value;
    matiere = document.getElementById("mat").selectedIndex;
    dc = document.getElementById("dc").value;
    ds = document.getElementById("ds").value;

    if (numero.subString(0,3) != "4SI" || Number(numero.subString(0,3)) < 0 ){
        alert("Veuiller saisir votre numero")
        return false
    }
    if (matiere == 0){
        alert("Vous devez choisir une matiere")
        return false
    }
    if (!(Number(dc) <= "20" && Number(dc) >= "0")){
        alert("Vous devez donne un valeur de 0 a 20")
        return false
    }

    if (!(Number(ds) <= "20" && Number(ds) >= "0")){
        alert("Vous devez donne un valeur de 0 a 20")
        return false
    }
    
    return true
}