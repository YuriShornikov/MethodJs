import Character from "./Character";

export default class Zombie extends Character {
    constructor(name, type = 'Zombie') {
        super(name, type);
        this.attack = 40;
        this.defence = 10;
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