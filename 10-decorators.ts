function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'newProperty';
    override = 'override';
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = 'string123';

  print() {
    console.log('buno mundo');
  }
}

console.log('----------------------------------');
const myClass = new SuperClass();
console.log(myClass);
