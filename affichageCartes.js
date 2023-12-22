//On doit afficher 3 cartes différentes qui sont: feu, eau et plante
let prompt = require("prompt-sync")();

function afficherLesCartes() {
    console.log("Actuellement, vous possédez 3 cartes différentes : ")
    console.log("Le feu (f)        L'eau (e)        La plante (p) ")
}

function voulezVousJouer() {
    let value = prompt("Voulez-vous jouez ?(Oui/Non) ")
    if (value == "Non") {
        console.log("Merci pour votre visite ")
    }
    if (value == "Oui") {
        afficherLesCartes()
    }
}
exports.voulezVousJouer = voulezVousJouer