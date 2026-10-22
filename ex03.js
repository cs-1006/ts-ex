// Tipo inline aplicado diretamente na variável ou estrutura
const paciente1 = {
    cpf: '123.456.789-00',
    nome: 'Ana Souza',
    idade: 34,
    plano: true,
    alergias: ['dipirona', 'lactose'],
    contatoEmergencia: {
        nome: 'José Felipe',
        telefone: '(11) 98765-4321'
    }
};
const paciente2 = {
    cpf: '987.654.321-11',
    nome: 'Carlos Lima',
    idade: 61,
    plano: false
};
function resumo(p) {
    const textoAlergias = p.alergias && p.alergias.length > 0
        ? `Alergias: ${p.alergias.join(', ')}`
        : 'Sem alergias registradas';
    return `${p.nome}, ${p.idade} anos. ${textoAlergias}`;
}
//paciente1.cpf = '111.111.111-11'; //Cannot assign to 'cpf' because it is a read-only property.
//paciente1.peso = 70; //Property 'peso' does not exist on type '{ readonly cpf: string; nome: string; idade: number; plano: boolean; alergias?: string[] | undefined; contatoEmergencia?: { nome: string; telefone: string; } | undefined; }'.
//let dados: object = paciente1;
//console.log(dados.nome); // Property 'nome' does not exist on type 'object'. Did you mean to access the property on the object itself?);
//o tipo object nao aceita valores primitivos,nem acessar propriedades diretamente, pois é um tipo genérico que não define a estrutura do objeto.
//Para acessar propriedades específicas, é necessário usar um tipo mais específico ou uma interface que descreva a forma do objeto.
//o tipo objeto vazio {} é um tipo que representa um objeto sem propriedades específicas, aceitando qualquer valor alem de null e undefined.
//No entanto, ele não fornece informações sobre as propriedades do objeto, portanto, não é possível acessar diretamente as propriedades sem uma definição de tipo mais específica.
console.log(resumo(paciente1));
console.log(resumo(paciente2));
export {};
