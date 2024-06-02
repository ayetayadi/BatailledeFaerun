//de.js
class De {
    //Génère un nombre aléatoire entre 0 et 2
    static lancerDe() {
        const value = 3;
        return Math.floor(Math.random() * value);
    }

    constructor() {
        this.resDe = De.lancerDe();
    }

    //retourne la somme des résultats(plusieurs lancés de dé à 3 faces)
    static lancerMultiples(nbLancer) {
        let somme = 0;
        while (nbLancer !== 0) {
            somme += De.lancerDe() + 1;
            nbLancer--;
        }
        return somme;
    }

    // Récupérer le résultat du dernier lancer
    getResDe() {
        return this.resDe;
    }
}
