const prompt = require("prompt-sync")();
/**
 * @function tuto
 * Cette fonction affiche le menu du jeu
 */
function tuto(){
    console.log("Le jeu appelé 'JEU DE CARTES' consiste à sélectionner 1 des 3 cartes que l'on va vous donner.");
    console.log("Les 3 cartes ont des pouvoirs très différents : ");
    console.log("- Carte du feu : Qui peut vaincre la carte de la plante, mais vaincue par la carte de l'eau.");
    console.log("- Carte de l'eau: Qui peut vaincre la carte du feu, mais vaincue par la carte de la plante.");
    console.log("- Carte de la plante : Qui peut vaincre la carte de l'eau, mais vaincue par la carte du feu.");
    console.log("");
    console.log("Du coup vous n'avez qu'à choisir l'une de ses cartes et votre adversaire choisira la sienne :-D .");
    console.log("");
    console.log(" N.B : Ceci n'est pas un jeu multijoueur, donc soyez sûr que je vais vous massacrer qui que vous soyez ;-) ")
}
tuto()
