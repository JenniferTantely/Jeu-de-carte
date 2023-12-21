
/**
 * @function comparaisonDesChoix
 * @param {string} choixUtilisateur 
 * @param {string} choixRobot 
 */
function comparaisonDesChoix(choixUtilisateur, choixRobot){
    let pointUtilisateur = 0
    let pointRobot = 0
    if(premierParamGagne(choixUtilisateur, choixRobot)){
        pointUtilisateur ++
    }
    else if(premierParamGagne(choixUtilisateur, choixRobot)==false){
        pointRobot ++
    }
}