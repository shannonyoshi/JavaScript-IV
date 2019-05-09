
class Person {
    constructor({ name, age, location }={}) {
        this.name = name;
        this.age = age;
        this.location = location;
    }
    speak() { return `Hello my name is ${this.name}, I am from ${this.location} where \`name\` and \`location\` are the object's own props. ` }
}
class Instructor extends Person {
    constructor({ name, age, location, specialty, favLanguage, catchPhrase }) {
        super({ name, age, location });
        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }
    demo(subject){console.log(`Today we are learning about ${subject}.`)}
    grade(student, subject){console.log(`${student.name} receives a perfect score on ${subject}.`)}
}

class Student extends Person{
    constructor({ name, age, location, previousBackground, className, favSubjects }) {
        super({ name, age, location });
        this.previousBackground = previousBackground;
        this.className = className;
        this.favSubjects = favSubjects;
    }
    listsSubjects(favSubjects){console.log(`${this.name}'s favorite subjects are: ${favSubjects.join(`, `)}.`)}
    PRAssignment(subject){console.log(`${this.name} has submitted a PR for ${subject}.`)}
    sprintChallenge(subject){console.log(`${this.name} has begun sprint challenge on ${subject}.`)}
}

class ProjectManagers extends Instructor{
    constructor({ name, age, location, specialty, favLanguage, catchPhrase, gradClassName, favInstructor}){
        super({ name, age, location, specialty, favLanguage, catchPhrase });
        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }
    standUp(channel){console.log(`${this.name} announces to ${channel}, @channel; standy times!`)}
    debugsCode(student, subject){console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)}
}

const dan = new Instructor({
    name:`dan`,
    age:`unknown`,
    location:`denver`,
    specialty:`redux`,
    favLanguage:`javascript`,
    catchPhrase:`Waassssuuuuppp?`
});

const john = new Instructor({
    name: `Doe`,
    age: 36,
    location: `everywhere and nowhere`,
    specialty: `slacking off`,
    favLanguage: `Fortran`,
    catchPhrase: `Someone once told me I should learn Fortran; I shouldn't have listened.`
}); 

const maks = new ProjectManagers({
    name:`Maks`,
    age:`unknown`,
    location:`Virginia`,
    specialty:`answering out silly questions`,
    favLanguage:`React`,
    catchPhrase:`Send me your links!`,
    gradClassName:`Web000`,
    favInstructor:`Big Knell`
});

const alan = new ProjectManagers({
    name: `Alan`,
    age: 28,
    location: `San Francisco`,
    specialty: `security`,
    favLanguage: `Go`,
    catchPhrase: `Byte me`,
    gradClassName: `None`,
    favInstructor: `just watching Stanford lectures`
});

const me = new Student({
    name:`Shannon`,
    age:`How dare you?!`,
    location:`San Francisco`,
    previousBackground:`not much`,
    className: `Web20`,
    favSubjects:[`undecided`, `traveling`, `sleeping`]
});

const caitlin = new Student({
    name:`Caitlin`,
    age:`27`,
    location:`Jet Setting`,
    previousBackground:`none`,
    className: `SF State '20`,
    favSubjects:[`orientation`, `mobility`]
});

dan.speak();
dan.demo(`Javascript-IV`);
john.grade(caitlin, `yogurt`);
me.listsSubjects(me.favSubjects);
caitlin.PRAssignment(`visual impairment`)
me.sprintChallenge(`Javascript Fundamentals`)
maks.standUp(`Web20_maks`);
alan.debugsCode(me, `classes`);

// #### Stretch Problem

// * Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
// * Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
// * Add a graduate method to a student.
//   * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
//   * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.

