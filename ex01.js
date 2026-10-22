const nomeProduto1 = 'Pão francês';
const precoUnitario1 = 0.75;
let quantidade1 = 12; //error TS2304: Cannot find name 'doze'.
const nomeProduto2 = 'Bolo de cenoura';
const precoUnitario2 = 18.5;
let quantidade2 = 2;
let aberta = true; //auto corrige para let aberta: boolean = true;
const subtotal1 = precoUnitario1 * quantidade1;
const subtotal2 = precoUnitario2 * quantidade2;
const total = subtotal1 + subtotal2;
const paesVendidosAno = 1250000;
const categoriaHex = 0x1A;
console.log(`${nomeProduto1}: ${quantidade1} x R$ ${precoUnitario1.toFixed(2)} = R$ ${subtotal1.toFixed(2)}`);
console.log(`${nomeProduto2}: ${quantidade2} x R$ ${precoUnitario2.toFixed(2)} = R$ ${subtotal2.toFixed(2)}`);
console.log(`Total: R$ ${total.toFixed(2)}`);
console.log(`Padaria aberta? ${aberta}`);
console.log(`Pães vendidos no ano: ${paesVendidosAno}`);
console.log(`Categoria: ${categoriaHex}`);
export {};
