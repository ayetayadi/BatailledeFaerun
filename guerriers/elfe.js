//elfe.js

class Elfe extends Guerrier {
    constructor() {
        super('elfe');
        this.setCout(this.getCout() * 2);
        this.setDegat(this.getDegat() * 2);
        this.setForce(this.getForce() * this.getDegat());
    }


}
