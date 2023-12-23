const premierParamGagne = require('./quiGagneManche');
const finalvainceur = require('./quiGagneJeu');
/**
 * @function pointPourUtilisateur
 * @param {string} choixUtilisateur 
 * @param {string} choixRobot 
 * @param {number} pointUtilisateur 
 * @returns number
 */
function pointPourUtilisateur(choixUtilisateur, choixRobot, pointUtilisateur){
    if(premierParamGagne.premierParamGagne(choixUtilisateur, choixRobot)){
        pointUtilisateur ++
    }
    return pointUtilisateur;
}
/**
 * @function pointPourRobot
 * @param {string} choixUtilisateur 
 * @param {string} choixRobot 
 * @param {number} pointRobot 
 * @returns number
 */
function pointPourRobot(choixUtilisateur, choixRobot, pointRobot){
    if(premierParamGagne.premierParamGagne(choixRobot, choixUtilisateur)){
        pointRobot ++
    }
    return pointRobot;
}
exports.pointPourRobot = pointPourRobot;
exports.pointPourUtilisateur = pointPourUtilisateur;