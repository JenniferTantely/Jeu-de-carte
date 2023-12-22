const premierParamGagne = require('./quiGagneManche');
const finalvainceur = require('./quiGagneJeu');
/**
 * @function comparaisonDesChoix
 * @param {string} choixUtilisateur 
 * @param {string} choixRobot 
 */
function comparaisonDesChoix(choixUtilisateur, choixRobot){
    let pointUtilisateur = 0;
    let pointRobot = 0;
    //manao boucle
    if(premierParamGagne.premierParamGagne(choixUtilisateur, choixRobot)){
        pointUtilisateur ++
    }
    else if(premierParamGagne.premierParamGagne(choixUtilisateur, choixRobot)==false){
        pointRobot ++
    }
    s

}
console.log(comparaisonDesChoix("p", "e"))
exports.comparaisonDesChoix = comparaisonDesChoix;