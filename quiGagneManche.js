/**
 * @function premierParamGagne
 * cette fonction verifie qui gagne
 * @param {string} joueur 
 * @param {string} robot 
 * @returns boolean
 */
function premierParamGagne(joueur, robot){
    if((joueur=="f" && robot=="p") || (joueur=="e" && robot=="f") || (joueur =="p" && robot=="e")){
        return true
    }
    else if(joueur == robot){
        return "égalité"
    }
    else{
        return false
    }
}
//console.log(premierParamGagne("p", "e"))
exports.premierParamGagne = premierParamGagne