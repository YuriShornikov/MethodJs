import Zombie from '../class/Zombie';

describe('Character class', () => {
    const Dead = new Zombie('Dead', 'Zombie');
    test('correct of characters', () => {
        expect(Dead).toEqual({
            name: 'Dead',
            type: 'Zombie',
            health: 100,
            level: 1,
            attack: 40,
            defence: 10,
        })
    })
    test('correct of health by lvl up', () => {
        Dead.health = 70;
        Dead.levelUp();
        expect(Dead).toEqual({
            level: 2,
            attack: 48,
            defence: 12,
            health: 100,
            name: "Dead",
            type: "Zombie",
        })
    })
    test('testing damage', () => {
        Dead.damage(20);

        // Урон применяется по формуле: health -= points * (1 - defence / 100)
        // health -= 20 * (1 - 12 / 100) = 82,4
        expect(Dead.health).toBe(82.4);
    })
})