export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Bruno',
  children: ['deicy'],
};

const passenger2: Passenger = {
  name: 'Rocio',
};

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;

  const { name } = passenger;
  console.log(name, howManyChildren);
};

console.log('*****************************');
printChildren(passenger2);
