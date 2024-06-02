//carreau.js

class Carreau {
    constructor(nbCarreau) {
        this.guerriersRouge = [];
        this.guerriersBleu = [];
        this.index = nbCarreau;
    }

    ajouterGuerrier(guerrier, camp) {
        if (camp === "rouge") {
            this.guerriersRouge.push(guerrier);
        } else {
            this.guerriersBleu.push(guerrier);
        }
    }
    
    combattre(chateauBleu, chateauRouge) {
        if (this.guerriersBleu.length !== 0 && this.guerriersRouge.length !== 0) {
            console.log("Guerrier(s) bleu sur ce carreau : " + this.guerriersBleu.length +
            ". \nGuerrier(s) rouge sur ce carreau : " + (this.guerriersRouge.length) +
            ".\nLa bataille commence !!!!!!!!!!!!!! \n");
            let j = 0;
            let nbGuerriers = this.guerriersBleu.length + this.guerriersRouge.length;
            while (j !== nbGuerriers) {
                if (this.guerriersRouge.length !== 0 && this.guerriersBleu.length !== 0) {
                    console.log("Les bleus jouent");
                    for (let i = 0; i < this.guerriersBleu.length; i++) {
                        if (this.guerriersRouge.length !== 0) {
                            let guerrier = this.guerriersRouge[0];
                            this.afficherCombat(this.guerriersBleu[i], guerrier);
                            if (guerrier.estMort()) {
                                this.guerriersRouge.shift();
                                //faire retirer les guerriers morts
                                chateauRouge.guerriersPrets = chateauRouge.guerriersPrets.filter(g => g !== guerrier);
                            }
                            j++;
                        }
                    }
                }
                if (this.guerriersRouge.length !== 0 && this.guerriersBleu.length !== 0) {
                    console.log("Les rouges jouent");
                    for (let i = 0; i < this.guerriersRouge.length; i++) {
                        if (this.guerriersBleu.length !== 0) {
                            let guerrier = this.guerriersBleu[0];
                            this.afficherCombat(this.guerriersRouge[i], guerrier);
                            if (guerrier.estMort()) {
                                this.guerriersBleu.shift();
                                chateauBleu.guerriersPrets = chateauBleu.guerriersPrets.filter(g => g !== guerrier);
                            }
                            j++;
                        }
                    }
                }
                j = nbGuerriers;
            }
        }
    }

    afficherCombat(guerrier1, guerrier2) {
        guerrier1.taper(guerrier2);
        console.log(guerrier1.getType() + " attaque " + guerrier2.getType());
        console.log(guerrier2.getType() + " a " +guerrier2.getPointsDeVie()+" points de vie.");
        console.log(guerrier1.getType() +" a "+ guerrier1.getPointsDeVie()+ " points de vie.\n");
    }


    getGuerriersRouge() {
        return this.guerriersRouge;
    }

    getGuerriersBleu() {
        return this.guerriersBleu;
    }

    getIndex() {
        return this.index;
    }

    setGuerrierRouge(guerriersRouge) {
        this.guerriersRouge = guerriersRouge;
    }

    setGuerrierBleu(guerriersBleu) {
        this.guerriersBleu = guerriersBleu;
    }

    setIndex(index) {
        this.index = index;
    }
}
