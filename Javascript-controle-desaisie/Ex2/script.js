function verif(){
    code = document.getElementById("Code").value;
    m_base = document.getElementById("mdb").selectedIndex;
    m_o1 = document.getElementById("ck1").checked;
    m_o2 = document.getElementById("ck2").checked;
    m_o3 = document.getElementById("ck3").checked;
    m_o4 = document.getElementById("ck4").checked;

    if (ch.substring(0,3) != "4SI" || Number(ch.substring(3,ch.length)) > 0){
        alert("Verifier votre code")
        return false
    }
    if(m_base == 0){
        alert("Veuiller saisir unr matiere de base")
        return false
    }
    let count = 0
    if (m_o1 == true){
        count++
    }
    if (m_o2 == true){
        count++
    }
    if (m_o3 == true){
        count++
    }
    if (m_o4 == true){
        count++
    }

    if (count < 2){
        alert("Tu dois choisir au moins 2 matières optionnelles")
        return false
    }

    return true

}