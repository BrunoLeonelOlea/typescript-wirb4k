export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType('hello world');
const amINumber = whatsMyType(2);
const amICollection = whatsMyType(['bruno', 'leonel']);

console.log('----------------------------------');
console.log(amIString.split(''));
console.log(amINumber.valueOf);
console.log(amICollection.at(1));
