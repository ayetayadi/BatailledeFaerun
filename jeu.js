//jeu.js


class Jeu {
    constructor() {
        this.listeGuerriersRouge = [];
        this.listeGuerriersBleu = [];
        this.chateauRouge = new Chateau("rouge");
        this.chateauBleu = new Chateau("bleu");
        this.plateau = new Plateau();
        this.tour = 0;

    }

    jouer() {
        if (this.chateauRouge.getQueueEntrainement().length === 0 && this.chateauBleu.getQueueEntrainement().length === 0) {
            alert("Vous devez entrainer les guerriers de 2 chateaux d'abbord!");
        } else {
            jouer.style.display = "none";
            tourBtn.style.display = "inline";
            this.chateauBleu.deployerGuerrier();
            this.chateauRouge.deployerGuerrier();
            this.mettreAJourListe();
            this.placerGuerriers();
            console.log("Les premières unités ont été créées ou attendent d'avoir suffisamment de ressources.");
            console.log("Plateau en début de jeu");
            this.miseEnBataille();
        }
    }

    nouveauTour() {
        this.tour++;
        console.log("Tour : " + this.tour);

        this.chateauBleu.setRessources(this.chateauBleu.getRessources() + 1);
        this.chateauRouge.setRessources(this.chateauRouge.getRessources() + 1);

        this.plateau.avancerGuerriers();
        this.chateauBleu.deployerGuerrier();
        this.chateauRouge.deployerGuerrier();
        this.mettreAJourListe();
        this.placerGuerriers();
        this.plateau.verifRencontreGuerrier(this.getChateauBleu(), this.getChateauRouge());
        let camp = this.plateau.gagner(this.chateauBleu, this.chateauRouge);
        if (camp !== "noir") {
            console.log(camp + " a gagné!!! wey!!");
            gagner.innerHTML = `<div id="messageBox" class="message-box" style="background-color: #EAE5FF;
            border: 1px solid #ccc;
            border-radius: 15%;
            padding: 15px;
            margin-top: 5%;
            margin-bottom: 10%;
            color: #000000a6;
            font-size: 30px;
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            text-align: center;"> Les Guerriers ${camp} ont gagné!!! 🥳🥳🥳</div>`;


            tourBtn.style.display = "none";
            entrainerBleuButton.style.display = "none";
            entrainerRougeButton.style.display = "none";
            /*listeAttenteBleuBtn.style.display = "none";
            listeAttenteRougeBtn.style.display = "none";*/

        }

        this.miseEnBataille();
    }



    placerGuerriers() {
        for (let guerrier of this.listeGuerriersBleu) {
            this.plateau.deployerGuerrier(guerrier, this.chateauBleu.getCamp());
        }
        this.listeGuerriersBleu = [];
        for (let guerrier of this.listeGuerriersRouge) {
            this.plateau.deployerGuerrier(guerrier, this.chateauRouge.getCamp());
        }
        this.listeGuerriersRouge = [];
    }



    mettreAJourListe() {
        this.listeGuerriersBleu = this.chateauBleu.getListeTemp().slice();
        this.listeGuerriersRouge = this.chateauRouge.getListeTemp().slice();
    }

    determinerGagnant() {
        let camp = "Noir";
        if (this.chateauBleu.getGuerriersPrets().length === 0 && this.chateauBleu.getQueueEntrainement().length === 0 && this.plateau.carreaux[0].getGuerriersRouge().length > 0) {
            camp = this.chateauRouge.getCamp();
        }
        if (this.chateauRouge.getGuerriersPrets().length === 0 && this.chateauRouge.getQueueEntrainement().length === 0 && this.plateau.carreaux[4].getGuerriersBleu().length > 0) {
            camp = this.chateauBleu.getCamp();
        }
        return camp;
    }

    getChateauRouge() {
        return this.chateauRouge;
    }

    getChateauBleu() {
        return this.chateauBleu;
    }

    setChateauRouge(chateauRouge) {
        this.chateauRouge = chateauRouge;
    }

    setChateauBleu(chateauBleu) {
        this.chateauBleu = chateauBleu;
    }

    miseEnBataille() {
        const guerrierInfo = document.createElement('div');
        guerrierInfo.style.backgroundColor = '#CB4001';
        guerrierInfo.style.color="white";
        guerrierInfo.style.position = 'absolute';
        guerrierInfo.style.border = '1px solid #ccc';
        guerrierInfo.style.padding = '10px';
        guerrierInfo.style.boxShadow = '0 0 10px #272444';
        guerrierInfo.style.display = 'none';
        guerrierInfo.style.zIndex = "1500";

        const plateaux = this.plateau.getCarreaux();
        plateaux.forEach((carreau, index) => {
            const listeBleu = document.getElementById(`c${index}`);
            const listeRouge = document.getElementById(`c${index}`);
            console.log(`c${index + 1}`, listeBleu, listeRouge);

            listeBleu.innerHTML = '';
            listeRouge.innerHTML = '';

            carreau.getGuerriersBleu().forEach(guerrier => {
                const guerrierContainer = document.createElement('div');
                guerrierContainer.style.position = 'relative';
                guerrierContainer.style.width = '100px';
                guerrierContainer.style.height = '70px';
                guerrierContainer.style.margin = '5px';

                const img = document.createElement('img');
                img.src = guerrier.getImages();
                img.style.backgroundColor = "#5271FF";
                img.style.width = "100%";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                img.addEventListener('mouseover', () => {
                    guerrierInfo.innerHTML = guerrier.afficheInfosGuerriers();
                    guerrierInfo.style.display = 'block';
                    const rect = img.getBoundingClientRect();
                    guerrierInfo.style.top = `${rect.top + window.scrollY}px`;
                    guerrierInfo.style.left = `${rect.right + window.scrollX + 10}px`;
                    document.body.appendChild(guerrierInfo);
                });
                img.addEventListener('mouseout', () => {
                    guerrierInfo.style.display = 'none';
                    document.body.removeChild(guerrierInfo);
                });

                const healthBar = document.createElement('div');
                healthBar.classList.add('health-bar');
                healthBar.innerHTML = `
                    <div class="health-bar-inner" style="width: ${(guerrier.getPointsDeVie() / 100) * 100}%;"></div>
                `;
                guerrierContainer.appendChild(img);
                guerrierContainer.appendChild(healthBar);
                listeBleu.appendChild(guerrierContainer);
            });

            carreau.getGuerriersRouge().forEach(guerrier => {
                const guerrierContainer = document.createElement('div');
                guerrierContainer.style.position = 'relative';
                guerrierContainer.style.width = '100px';
                guerrierContainer.style.height = '70px';
                guerrierContainer.style.margin = '5px';

                const img = document.createElement('img');
                img.src = guerrier.getImages();
                img.style.backgroundColor = "#EC1E29";
                img.style.width = "100%";
                img.style.height = "100px";
                img.style.objectFit = "contain";
                img.addEventListener('mouseover', () => {
                    guerrierInfo.innerHTML = guerrier.afficheInfosGuerriers();
                    guerrierInfo.style.display = 'block';
                    const rect = img.getBoundingClientRect();
                    guerrierInfo.style.top = `${rect.top + window.scrollY}px`;
                    guerrierInfo.style.left = `${rect.right + window.scrollX + 10}px`;
                    document.body.appendChild(guerrierInfo);
                });
                img.addEventListener('mouseout', () => {
                    guerrierInfo.style.display = 'none';
                    document.body.removeChild(guerrierInfo);
                });

                const healthBar = document.createElement('div');
                healthBar.classList.add('health-bar');
                healthBar.innerHTML = `
                    <div class="health-bar-inner" style="width: ${(guerrier.getPointsDeVie() / 100) * 100}%;"></div>
                `;
                guerrierContainer.appendChild(img);
                guerrierContainer.appendChild(healthBar);
                listeRouge.appendChild(guerrierContainer);
            });
        });
    }

}
