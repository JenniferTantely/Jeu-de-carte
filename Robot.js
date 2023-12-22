// Le robot choisit sa carte aléatoirement
function choixRobot() {
    let card = ["p", "e", "f"];
return (card[Math.floor(Math.random() * card.length)]);
}
//console.log(choixRobot())
exports.choixRobot = choixRobot;