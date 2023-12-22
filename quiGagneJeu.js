
const voulezVousJouer = require('./affichageCartes');
/**
 * @function finalvainceur
 * @param {number} pointUtilisateur 
 * @param {number} pointRobot 
 */
function finalvainceur(pointUtilisateur, pointRobot){
    if(pointUtilisateur>pointRobot){
        //fonction message succes
    }
    else if(pointUtilisateur<pointRobot){
        //fonction message echec
    }
    else if(pointUtilisateur==pointRobot){
        voulezVousJouer();
    }
};
exports.finalvainceur = finalvainceur;
