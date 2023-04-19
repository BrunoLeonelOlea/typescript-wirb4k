export class Person {
  constructor(public name: string, private adress: string = 'No Adress') {}
}

const bruno = new Person('leonel');

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'NY');
  }
}

const ironMan = new Hero('Ironman', 50, 'Tony');

console.log(bruno.name, bruno.adress);
