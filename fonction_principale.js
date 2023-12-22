const prompt = require('prompt-sync')();

const menu = require('./menu');
const choisirOptionDuMenu = require('./choisirOption');
const tuto = require('./tuto');
const afficherLesCartes = require('./affichageCartes');
const choixUtilisateur = require('./choisirCarte');
const choixRobot = require('./Robot');
const pointPourRobot = require('./comparaisonDesChoix');
const pointPourUtilisateur = require('./comparaisonDesChoix');
const finalvainceur = require('./quiGagneJeu')

function jeuDeCarte() {
    menu.menu();
    let option = choisirOptionDuMenu.choisirOptionDuMenu();
    if (option == 1) {
        let pointRobot = 0;
        let pointUtilisateur = 0;
        for (let i = 1; i <= 3; i++) {
            afficherLesCartes.afficherLesCartes();
            let carteUtilisateur = choixUtilisateur.choixUtilisateur();
            let carteRobot = choixRobot.choixRobot();
            console.log(`Carte du robot : ${carteRobot}`)
            pointRobot = pointPourRobot.pointPourRobot(carteUtilisateur, carteRobot, pointRobot);
            pointUtilisateur = pointPourUtilisateur.pointPourUtilisateur(carteUtilisateur, carteRobot, pointUtilisateur);
            console.log(`Vous : ${pointUtilisateur} Machine : ${pointRobot}`)
        };

        finalvainceur.finalvainceur(pointUtilisateur, pointRobot);
        if (pointUtilisateur == pointRobot) {
            let recommencer = prompt('Voulez-vous recommencer  ?(Oui/Non) ')
            if (recommencer == "Non") {
                console.log("Merci d'avoir joué :)");
            }
            else if (recommencer == "Oui") {
                return jeuDeCarte();
            }
        }

    }
    else if (option == 2) {
        tuto.tuto();
    }
    else if (option == 3) {
        console.log("Merci pour votre visite");
    }

}
jeuDeCarte();