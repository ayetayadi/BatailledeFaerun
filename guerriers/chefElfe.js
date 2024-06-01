//chefElfe.js


class ChefElfe extends Elfe {
    constructor() {
        super();
        this.type = 'chefElfe';
        this.setCout(this.getCout() * 2);
        this.setForce(this.getForce() * this.getDegat());
    }

    
}
