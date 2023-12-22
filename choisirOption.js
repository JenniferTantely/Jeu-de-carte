const prompt = require ('prompt-sync')();
function choisirOptionDuMenu(){
    let choix = prompt("Veuillez choisir un option : ");
    return choix;
};
exports.choisirOptionDuMenu = choisirOptionDuMenu;