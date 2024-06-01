//main.js

var chateau = null;
var tourBtn = document.getElementById('tour');
var jouer = document.getElementById("jouer");
var sideSelected;
var jeu = new Jeu();

const selectDivSection = document.getElementById('selectDiv');
const addUnits = document.querySelector('.addUnits');
const entrainerBleuButton = document.getElementById('entrainerBleu');
const entrainerRougeButton = document.getElementById('entrainerRouge');
const plateau = document.getElementById('plateau');
const startGame = document.getElementById('startGame');
const gagner = document.getElementById("gagner");

startGame.addEventListener("click", () => {
    tourBtn.style.display = "none";
    jouer.style.display = "inline";
    startGame.style.display = "none";
    entrainerRougeButton.style.display = "inline";
    entrainerBleuButton.style.display = "inline"

});

jouer.addEventListener("click", () => { jeu.jouer(); })

tourBtn.addEventListener('click', () => { jeu.nouveauTour(); })


entrainerBleuButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected = 'bleu';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected = '';
    }

});



entrainerRougeButton.addEventListener('click', () => {
    if (selectDivSection.style.display === 'none') {
        selectDivSection.style.display = 'block';
        sideSelected = 'rouge';
    } else {
        selectDivSection.style.display = 'none';
        sideSelected = '';

    }
});


addUnits.addEventListener('click', (event) => {
    let chateau;
    if (sideSelected === 'rouge') {
        chateau = jeu.getChateauRouge();
        listeAttenteRouge = chateau.queueEntrainement;
    } else {
        chateau = jeu.getChateauBleu();
        listeAttenteBleu = chateau.queueEntrainement;
    }

    switch (event.target.id) {
        case "addNain":
            chateau.creerUnNain();
            break;
        case "addChefNain":
            chateau.creerChefNain();
            break;
        case "addElfe":
            chateau.creerUnElfe();
            break;
        case "addChefElfe":
            chateau.creerChefElfe();
            break;
        default:
            break;
    }
});


entrainerBleuButton.addEventListener('mouseover', () => {
    const chateau = jeu.getChateauBleu();
    const listeAttenteBleu = chateau.queueEntrainement;
    console.log(listeAttenteBleu);


    const guerriersBleu = document.getElementById('guerriersBleu');
    let content = '';
    listeAttenteBleu.forEach(guerrier => {
        const imgSrc = guerrier.getImages();
        content += `<li style="display: inline-block; "><img src="${imgSrc}" style="width: 50px; height: 50px; object-fit: contain; margin: 5px;"> <p style="color:blue;text-align: center;">${guerrier.getType()}</p></li>`;
    });

    guerriersBleu.innerHTML = content;
    guerriersBleu.style.display = 'inline-block';

});

entrainerBleuButton.addEventListener('mouseout', () => {
    guerriersBleu.style.display = 'none';

});


entrainerRougeButton.addEventListener('mouseover', () => {
    chateau = jeu.getChateauRouge();
    listeAttenteRouge = chateau.queueEntrainement;
    console.log(listeAttenteRouge);


    const guerriersRouge = document.getElementById('guerriersRouge');
    let content = '';
    listeAttenteRouge.forEach(guerrier => {
        const imgSrc = guerrier.getImages();
        content += `<li style="display: inline-block; "><img src="${imgSrc}" style="width: 50px; height: 50px; object-fit: contain; margin: 5px;"> <p style="color:red;text-align: center;">${guerrier.getType()}</p></li>`;
    });

    guerriersRouge.innerHTML = content;
    guerriersRouge.style.display = 'inline-block';


});

entrainerRougeButton.addEventListener('mouseout', () => {
    guerriersRouge.style.display = 'none';

});












