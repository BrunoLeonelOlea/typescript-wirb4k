import { Product, taxCalculation } from './06-function-destructuring';
import './07-classes.ts';
import './08-generics';
import './10-decorators';
import './11-optional-chaining';
console.log('Hola mundo');

const a: number = 10;

console.log('----------------------------------');
console.log(a);

// IMPORTANTE:
// Ver la consola de JavaScript

const phone: Product = {
  description: 'Iphone Xr 64 gb',
  price: 500,
};

const tablet: Product = {
  description: 'Ipad pro',
  price: 600,
};

const shoppingCard = [phone, tablet];
const tax: number = 0.15;

const [total, taxTotal, abc]: number[] = taxCalculation({
  tax,
  products: shoppingCard,
});

const { description: phoneDescription, price: phonePrice } = phone;

console.log('----------------------------------');
console.log(phoneDescription);

console.log(total);
console.log(taxTotal);
