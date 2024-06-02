//plateau.js

class Plateau {
    constructor() {
        this.NB_CARREAUX = 5;
        this.listeTemp = [];
        this.carreaux = [];
        this.nbCarreaux = 0;
        this.ajouterCarreauMultiples(this.NB_CARREAUX);
    }

    deployerGuerrier(guerrier, camp) {
        if (camp === 'bleu') {
            this.carreaux[0].ajouterGuerrier(guerrier, camp);
        } else {
            this.carreaux[4].ajouterGuerrier(guerrier, camp);
        }
    }

    ajouterUnCarreau(nbCarreau) {
        let carreau = new Carreau(nbCarreau);
        this.carreaux[carreau.getIndex()] = carreau;
        this.nbCarreaux++;
    }

    ajouterCarreauMultiples(nbCases) {
        for (let i = 0; i < nbCases; i++) {
            this.ajouterUnCarreau(i);
        }
    }

    avancerGuerriers() {
        this.listeTemp = [];
        for (let i = 0; i < 5; i++) {
            if (this.carreaux[i].getGuerriersRouge().length > 0 && this.carreaux[i].getGuerriersBleu().length === 0) {
                this.listeTemp = this.listeTemp.concat(this.carreaux[i].getGuerriersRouge());
                this.carreaux[i - 1].getGuerriersRouge().push(...this.listeTemp);
                this.carreaux[i].getGuerriersRouge().length = 0;
                this.listeTemp = [];
            }
        }
        for (let i = 4; i >= 0; i--) {
            if (this.carreaux[i].getGuerriersRouge().length === 0 && this.carreaux[i].getGuerriersBleu().length > 0) {
                this.listeTemp = this.listeTemp.concat(this.carreaux[i].getGuerriersBleu());
                this.carreaux[i + 1].getGuerriersBleu().push(...this.listeTemp);
                this.carreaux[i].getGuerriersBleu().length = 0;
                this.listeTemp = [];
            }
        }
    }
    


    verifRencontreGuerrier(chateauBleu, chateauRouge) {
        this.carreaux.forEach(carreau => {
            carreau.combattre(chateauBleu, chateauRouge);
        });
    }

    gagner() {
        let camp="noir"
        let carreau0 = this.carreaux[0];
        let carreau4 = this.carreaux[4];
        if (carreau0.getGuerriersRouge().length > 0 && carreau4.getGuerriersBleu().length == 0) {
            camp = "rouge";
        }
        if (carreau4.getGuerriersBleu().length > 0 && carreau4.getGuerriersRouge().length == 0) {
            camp = 'bleu';
        }
        return camp;
    }

    getCarreaux() {
        return this.carreaux;
    }

    getNbCarreaux() {
        return this.nbCarreaux;
    }

    setCarreaux(carreaux) {
        this.carreaux = carreaux;
    }

    setNbCarreaux(nbCarreaux) {
        this.nbCarreaux = nbCarreaux;
    }
}
