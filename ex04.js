const itens = [
    { nome: 'Arroz 5kg', preco: 28.90, quantidade: 1 },
    { nome: 'Feijão 1kg', preco: 8.49, quantidade: 2 },
    { nome: 'Leite 1L', preco: 4.99, quantidade: 6 },
    { nome: 'Café 500g', preco: 17.90, quantidade: 1 },
    { nome: 'Sabão em pó', preco: 12.50, quantidade: 1 }
];
const nomes = itens.map(i => i.nome);
const caros = itens.filter(i => i.preco > 10.00);
const total = itens.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
const categorias = ['Mercearia', 'Laticínios', 'Limpeza'];
// categorias.push('Hortifrúti'); 
// Property 'push' does not exist on type 'readonly string[]'.
const prateleiras = [[2, 0, 1], [4, 4], [1]];
// Usando .flat() para achatar a matriz e .reduce() para somar tudo
const totalItensDespensa = prateleiras.flat().reduce((acc, qtd) => acc + qtd, 0);
console.log(`Itens: ${nomes.join(', ')}`);
console.log(`Acima de R$ 10: ${caros.map(c => c.nome).join(', ')}`);
console.log(`Total da compra: R$ ${total.toFixed(2)}`);
console.log(`Itens na despensa: ${totalItensDespensa}`);
export {};
