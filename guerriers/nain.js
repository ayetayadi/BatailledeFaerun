//nain.js

class Nain extends Guerrier {
    constructor() {
        super('nain');
    }

    degatsRecus(nbDegat) {
        this.pointsDeVie -= Math.floor(nbDegat / 2);  // Subit 2x moins de dégâts
    }


}
