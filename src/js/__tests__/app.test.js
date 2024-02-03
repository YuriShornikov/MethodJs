import Character from "../app";

describe('testing class', () => {
    test('correct stats Bowman', () => {
        const Legolas = new Character('Legolas', 'Bowman');
        expect(Legolas.attack).toBe(25);
        expect(Legolas.defence).toBe(25);
    })
    test('correct stats Swordsman', () => {
        const Boromir = new Character('Boromir', 'Swordsman');
        expect(Boromir.attack).toBe(40);
        expect(Boromir.defence).toBe(10);
    })
    test('correct stats Magician', () => {
        const Gandalf = new Character('Gandalf', 'Magician');
        expect(Gandalf.attack).toBe(10);
        expect(Gandalf.defence).toBe(40);
    })
    test('correct error of name', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Invaled name');
    })
    test('correct error of type', () => {
        expect(() => new Character('Legolas', 'Assasin')).toThrow('Invalid character type');
    })
    const Legolas = new Character('Legolas', 'Bowman');
    test('health = 0', () => {
        Legolas.health = 0;
        expect(() => Legolas.levelUp()).toThrow('You are dead');
    })
    test('correct of health', () => {
        Legolas.health = 70;
        Legolas.levelUp();
        expect(Legolas).toEqual({
            level: 2,
            attack: 30,
            defence: 30,
            health: 100,
            name: "Legolas",
            type: "Bowman",
        })
    })
    test('testing damage', () => {
        const Aragorn = new Character('Aragorn', 'Swordsman');
        Aragorn.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 10 / 100) = 20 * 0.9 = 18
        expect(Aragorn.health).toBe(82);
    })
    test('testing damage when we have low hp', () => {
        const Frodo = new Character('Frodo', 'Undead');
        
        // Здоровье менее 100
        Frodo.health = 5;

        // Здоровье не может быть отрицательным
        expect(() => Frodo.damage(20)).toThrow('Dead');
    })
})