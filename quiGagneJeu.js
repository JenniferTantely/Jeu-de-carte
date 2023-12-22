const succesMessage = require('./messageAuResultat');
const echecMessage = require('./messageAuResultat');
const voulezVousJouer = require('./affichageCartes');
const vousAvezGagne = require('./decoration');
const vousAvezPerdue = require('./decoration');
/**
 * @function finalvainceur
 * @param {number} pointUtilisateur 
 * @param {number} pointRobot 
 */
function finalvainceur(pointUtilisateur, pointRobot){
    if(pointUtilisateur>pointRobot){
        console.log(succesMessage.succesMessage());
        vousAvezGagne.vousAvezGagne();
    }
    else if(pointUtilisateur<pointRobot){
        console.log(echecMessage.echecMessage());
        vousAvezGagne.vousAvezPerdue();
    }
}
//finalvainceur(2,1)
exports.finalvainceur = finalvainceur;
