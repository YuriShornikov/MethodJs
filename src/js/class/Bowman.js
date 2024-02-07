import Character from "./Character";

export default class Bowman extends Character {
    constructor(name, type = 'Bowman') {
        super(name, type);
        this.attack = 25;
        this.defence = 25;
    }

    // Переопределение метода levelUp
    levelUp() {
        super.levelUp();
    }

    // Переопределение метода damage
    damage(points) {
        super.damage(points);
    }
}
