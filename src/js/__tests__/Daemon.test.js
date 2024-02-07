import Daemon from "../class/Daemon";

describe('Character class', () => {
    const Lucifer = new Daemon('Lucifer', 'Daemon');
    test('correct of characters', () => {
        expect(Lucifer).toEqual({
            name: 'Lucifer',
            type: 'Daemon',
            health: 100,
            level: 1,
            attack: 10,
            defence: 40,
        })
    })
    test('correct of health by lvl up', () => {
        Lucifer.health = 70;
        Lucifer.levelUp();
        expect(Lucifer).toEqual({
            level: 2,
            attack: 12,
            defence: 48,
            health: 100,
            name: "Lucifer",
            type: "Daemon",
        })
    })
    test('testing damage', () => {
        Lucifer.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 48 / 100) = 20 * 0.75 = 89
        expect(Lucifer.health).toBe(89.6);
    })
})