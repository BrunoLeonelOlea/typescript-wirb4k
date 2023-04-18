export interface Product {
  price: number;
  description: string;
}

interface TaxCalcultionOptions {
  tax: number;
  products: Product[];
}

export function taxCalculation({
  tax,
  products,
}: TaxCalcultionOptions): [number, number] {
  let total = 0;
  products.forEach(({ price }) => (total += price));
  return [total, total * tax];
}
