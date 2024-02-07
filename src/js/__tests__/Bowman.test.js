import Bowman from "../class/Bowman";

describe('Character class', () => {
    const Legolas = new Bowman('Legolas', 'Bowman');
    test('correct of characters', () => {
        expect(Legolas).toEqual({
            name: 'Legolas',
            type: 'Bowman',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        })
    })
    test('correct of health by lvl up', () => {
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
        Legolas.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 30 / 100) = 20 * 0.75 = 86
        expect(Legolas.health).toBe(86);
    })
})
