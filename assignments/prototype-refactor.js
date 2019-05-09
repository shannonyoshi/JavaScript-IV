class GameObject {
    constructor(attributes) {
        this.name = attributes.name;
        this.createdAt = new Date();
        this.dimensions = attributes.dimensions;
    }
    destroy() {
        return (`${this.name} was removed from the game.`)
    }
}

//Character Stats
class CharacterStats extends GameObject {
    constructor(attributes) {
        super(attributes);
        this.healthPoints = attributes.healthPoints;
    }
    takeDamage() {
        return (`${this.name} took damage.`)
    }
}

//Humanoid 
class Humanoid extends CharacterStats {
    constructor(attributes) {
        super(attributes);
        this.team = attributes.team;
        this.weapons = attributes.weapons;
        this.language = attributes.language;
    }
    greet() {
        return (`${this.name} offers a greeting in ${this.language}`)
    }
}
//Villain
class Villain extends Humanoid{
    constructor(attributes) {
        super(attributes);
    }
    failsteal(){return `${this.name} tried and failed to steal from you.`}  
    stoleKitty(){return `${this.name} stole the pocket kitten.`}  
}

//Hero
class Hero extends Humanoid{
    constructor(attributes) {
        super(attributes);
    }
    feed(){return `${this.name} has fed you.`}
    kill(){return `The hero, ${this.name}, accidentally killed you.`}
}


const pocketKitty = new Humanoid({
    dimensions: {
        length: 1,
        width: 1,
        height: 1,
    },
    healthPoints: 9,
    name: 'Pocket Kitten',
    team: 'Likes to Swat Guild',
    weapons: [
        'Teeth',
        'Claws',
    ],
    language: 'Meow',
});

const billy = new Villain({
    dimensions: {
        length: 1,
        width: 2,
        height: 2,
    },
    healthPoints: 12,
    name: 'Dr. Horrible',
    team: 'Evil League of Evil',
    weapons: [
        'Freeze Ray',
        'Transmatter Ray',
    ],
    language: 'The Common Tongue',
});

const hammer = new Hero({
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 8,
    name: 'Captain Hammer',
    team: 'Himself',
    weapons: [
        'Fists',
        'Hammer',
    ],
    language: 'The Common Tongue',
});

// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

const mage = new Humanoid({
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});
console.log(billy.stoleKitty());
console.log(hammer.kill());
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
