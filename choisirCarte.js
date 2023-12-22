//Demander à l'utilisateur de choisir une carte
const prompt = require("prompt-sync")();
function choixUtilisateur(){
    let value = prompt("Veuillez choisir une carte : ")
    return value
}
exports.choixUtilisateur = choixUtilisateur;