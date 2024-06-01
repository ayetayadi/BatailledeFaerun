//guerrier.js
class Guerrier {
    constructor(type) {
        this.type = type;
        this.force = 10;
        this.pointsDeVie = 100;
        this.cout = 1;
        this.degat=1;
        this.de = new De();
    }

    taper(guerrier) {
        let somme = De.lancerMultiples(this.force);
        console.log("Degat : " + somme);
        guerrier.degatsRecus(somme);
    }

    degatsRecus(nbDegat) {
        this.pointsDeVie -= Math.floor(nbDegat);
        if (this.pointsDeVie < 0) this.pointsDeVie = 0;
        this.updateHealthBar();
    }

    updateHealthBar() {
        if (this.element) {
            const healthBarInner = this.element.querySelector('.health-bar-inner');
            if (healthBarInner) {
                const healthPercentage = (this.pointsDeVie / 100) * 100;
                healthBarInner.style.width = `${healthPercentage}%`;
                this.element.querySelector('.points-de-vie').textContent = this.pointsDeVie;
            }
        }
    }


    estMort() {
        return this.pointsDeVie <= 0;
    }

    afficheInfosGuerriers() {
        return `
        <ul>
          <li>Type : ${this.type}</li>
          <li>Points de vie : ${this.pointsDeVie}</li>
          <li>Force : ${this.force} (Force multiplié par dégât : ${this.degat})</li>
          <li>Coût unité : ${this.cout}</li>
        </ul>
      `;
        
    }

    getImages() {
        switch (this.type) {
            case 'nain':
                return './images/nain.png';
            case 'chefNain':
                return './images/chefNain.png';
            case 'elfe':
                return './images/elfe.png';
            case 'chefElfe':
                return './images/chefElfe.png';
            default:
                return '';
        }
    }

    getDegat() {
        return this.degat;
    }

    getType() {
        return this.type;
    }

    getForce() {
        return this.force;
    }
    getPointsDeVie() {
        return this.pointsDeVie;
    }

    setPointsDeVie(pointsDeVie) {
        this.pointsDeVie = pointsDeVie;
    }

    setType(type) {
        this.type = type;
    }

    setForce(force) {
        this.force = force;
    }

    setDegat(degat) {
        this.degat = degat;
    }

    getCout() {
        return this.cout;
    }

    setCout(cout) {
        this.cout = cout;
    }

}

