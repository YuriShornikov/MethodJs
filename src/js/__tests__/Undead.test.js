import Undead from "../class/Undead";

describe('Character class', () => {
    const Skelet = new Undead('Skelet', 'Undead');
    test('correct of characters', () => {
        expect(Skelet).toEqual({
            name: 'Skelet',
            type: 'Undead',
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        });
    });
    test('correct of health by lvl up', () => {
        Skelet.health = 70;
        Skelet.levelUp();
        expect(Skelet).toEqual({
            level: 2,
            attack: 30,
            defence: 30,
            health: 100,
            name: 'Skelet',
            type: 'Undead',
        })
    })
    test('testing damage', () => {
        Skelet.damage(20);
        expect(Skelet.health).toBe(86);
    })   
})
