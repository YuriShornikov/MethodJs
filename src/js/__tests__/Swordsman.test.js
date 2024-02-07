import Swordsman from "../class/Swordsman";

describe('Character class', () => {
    const Aragorn = new Swordsman('Aragorn', 'Swordsman');
    test('correct of characters', () => {
        expect(Aragorn).toEqual({
            name: 'Aragorn',
            type: 'Swordsman',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        })
    })
    test('correct of health by lvl up', () => {
        Aragorn.health = 70;
        Aragorn.levelUp();
        expect(Aragorn).toEqual({
            level: 2,
            attack: 48,
            defence: 12,
            health: 100,
            name: "Aragorn",
            type: "Swordsman",
        })
    })
    test('testing damage', () => {
        Aragorn.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 12 / 100) = 82,4
        expect(Aragorn.health).toBe(82.4);
    })
})