//chateau.js

class Chateau {
    constructor(camp) {
        this.camp = camp;
        this.ressources = 3;
        this.queueEntrainement = [];//liste d'attente des guerriers
        this.guerriersPrets = [];//liste des guerriers
        this.listeTemp = [];
    }


    deployerGuerrier() {
        this.listeTemp = [];
        let ressources = this.getRessources();
        while (ressources !== 0 && this.queueEntrainement.length !== 0) {
            let guerrier = this.queueEntrainement[0];
            if (guerrier.getCout() <= ressources) {
                console.log("Il y'a " +ressources+" ressources et le guerrier " + guerrier.getType() + " a " + guerrier.getCout()+" cout d'entrainement.");
                this.guerriersPrets.push(guerrier);
                this.listeTemp.push(guerrier);
                this.queueEntrainement.shift();
                this.ressources -= guerrier.getCout();
                ressources = this.getRessources();
                console.log("Ajout à la liste.");
            } else {
                console.log("Ce guerrier "+guerrier.getType()+" de cout d'entrainement "+guerrier.getCout()+" reste a la liste d'attente pour des ressources "+ressources);
                ressources = 0;
            }
        }
    }



    /*   entrainerGuerriers() {
           for (let i = 0; i < this.queueEntrainement.length && this.ressources > 0; i++) {
               const guerrier = this.queueEntrainement[i];
               const coutEntrainement = this.getCoutEntrainnement(guerrier);
               if (this.ressources >= coutEntrainement) {
                   this.ressources -= coutEntrainement;
                   this.guerriersPrets.push(guerrier);
                   this.queueEntrainement.splice(i, 1);  // Retire le guerrier de la queue
                   i--;
               }
           }
       }
   
       getCoutEntrainnement(guerrier) {
           switch (guerrier.type) {
               case 'Nain': return 1;
               case 'Elfe': return 2;
               case 'ChefNain': return 3;
               case 'ChefElfe': return 4;
               default: return 1;
           }
       }*/

    creerUnNain() {
        let nain = new Nain();
        this.queueEntrainement.push(nain);
    }


    creerChefNain() {
        let chefNain = new ChefNain();
        this.queueEntrainement.push(chefNain);
    }


    creerUnElfe() {
        let elfe = new Elfe();
        this.queueEntrainement.push(elfe);
    }


    creerChefElfe() {
        let chefElfe = new ChefElfe();
        this.queueEntrainement.push(chefElfe);
    }


    nettoyerLaListe() {
        this.guerriersPrets = [];
        this.queueEntrainement = [];
    }


    afficherArmee() {
        let nbGuerriers = this.guerriersPrets.length;
        if (nbGuerriers !== 0) {
            console.log("Chateau " + this.getCamp() + " de nombre de guerriers : " + nbGuerriers + " sont au combat");
        } else {
            alert("Entainez vos guerrires de chateau " + this.getCamp() + " !!!");
        }
    }

    getListeTemp() {
        return this.listeTemp;
    }

    getCamp() {
        return this.camp;
    }

    setRessources(ressources) {
        this.ressources = ressources;
    }

    getRessources() {
        return this.ressources;
    }

    getQueueEntrainement() {
        return this.queueEntrainement;
    }

    getGuerriersPrets() {
        return this.guerriersPrets;
    }

    setGuerriersPrets(guerriersPrets) {
        this.guerriersPrets = guerriersPrets;
    }

    setCamp(camp) {
        this.camp = camp;
    }

    setQueueEntrainement(queueEntrainement) {
        this.queueEntrainement = queueEntrainement;
    }

    setListeTemp(listeTemp) {
        this.listeTemp = listeTemp;
    }
}
