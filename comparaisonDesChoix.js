const premierParamGagne = require('./quiGagneManche');
const finalvainceur = require('./quiGagneJeu');
/**
 * @function comparaisonDesChoix
 * @param {string} choixUtilisateur 
 * @param {string} choixRobot 
 */
function pointPourUtilisateur(choixUtilisateur, choixRobot, pointUtilisateur){
    if(premierParamGagne.premierParamGagne(choixUtilisateur, choixRobot)){
        pointUtilisateur ++
    }
    return pointUtilisateur;
}

function pointPourRobot(choixUtilisateur, choixRobot, pointRobot){
    if(premierParamGagne.premierParamGagne(choixRobot, choixUtilisateur)){
        pointRobot ++
    }
    return pointRobot;
}
exports.pointPourRobot = pointPourRobot;
exports.pointPourUtilisateur = pointPourUtilisateur;