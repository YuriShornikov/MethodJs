import Character from "../class/Character";

describe('Character class', () => {
    test('correct of characters', () => {
        const def = new Character('Gladiator', 'Swordsman');
        expect(def).toEqual({
            name: 'Gladiator',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: undefined,
            defence: undefined,
        })
    })
    test('correct error of name', () => {
        expect(() => new Character('A', 'Bowman')).toThrow('Invaled name');
    });
    test('correct error of type', () => {
        expect(() => new Character('Legolas', 'Assasin')).toThrow('Invalid character type');
    })

    // создаем Legolasa для ниже следующих тестов
    const Legolas = new Character('Legolas', 'Bowman');
    test('health = 0, func levelUp', () => {
        Legolas.health = 0;
        expect(() => Legolas.levelUp()).toThrow('You are dead');
    })
    test('health = 0, func damage', () => {
        expect(() => Legolas.damage(20)).toThrow('Dead');
    })
});