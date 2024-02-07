export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Invaled name');
        } else {
            this.name = name;
        }

        const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
        if (!validTypes.includes(type)) {
            throw new Error('Invalid character type');
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;

        this.attack = undefined;
        this.defence = undefined;
    }

    levelUp() {
        if (this.health <= 0) {
            throw new Error('You are dead');
        }

        this.level += 1;
        this.attack *= 1.2;
        this.defence *= 1.2;
        this.health = 100;
    }

    damage(points) {
        if (this.health <= 0) {
            throw new Error('Dead');       
        }

        this.health -= points * (1 - this.defence / 100);

        
    }
}