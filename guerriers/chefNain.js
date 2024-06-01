//chefNain.js

class ChefNain extends Nain {
    constructor() {
        super();
        this.type = 'chefNain';
        this.setCout(this.getCout() * 3);
    }

    degatsRecus(nbDegat) {
        this.pointsDeVie -= Math.floor(nbDegat / 4);  // Subit 2x moins de dégâts qu'un nain (donc 4x moins qu'un guerrier)
    }

    
}
