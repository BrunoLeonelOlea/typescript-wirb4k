export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    private adress: string = 'No Adress'
  ) {}
}

const bruno = new Person('leonel', 'olea');

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, 'NY');
//   }
// }

export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}
const tony = new Person('Tony', 'Stark', 'Ny');
const ironMan = new Hero('Ironman', 50, 'Marcos', tony);


console.log('----------------------------------');
console.log(ironMan);
console.log(tony);
