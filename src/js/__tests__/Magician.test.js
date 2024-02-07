import Magician from '../class/Magician';

describe('Character class', () => {
    const Gandalf = new Magician('Gandalf', 'Magician');
    test('correct of characters', () => {
        expect(Gandalf).toEqual({
            name: 'Gandalf',
            type: 'Magician',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        })
    })
    test('correct of health by lvl up', () => {
        Gandalf.health = 70;
        Gandalf.levelUp();
        expect(Gandalf).toEqual({
            level: 2,
            attack: 12,
            defence: 48,
            health: 100,
            name: "Gandalf",
            type: "Magician",
        })
    })
    test('testing damage', () => {
        Gandalf.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 48 / 100) = 20 * 0.75 = 89
        expect(Gandalf.health).toBe(89.6);
    })
})