export {};

let codigo: number | string;

function formatarCodigo(c: number | string): string {
  if (typeof c === 'number') {
    // Se for número, converte e aplica padStart
    return `CLI-${c.toString().padStart(4, '0')}`;
  }
  // Se for string (ex: 'CLI-0042' ou '0042')
  if (c.startsWith('CLI-')) {
    return c;
  }
  return `CLI-${c.padStart(4, '0')}`;
}

type TamanhoCamiseta = 'P' | 'M' | 'G' | 'GG';
const tamanho: TamanhoCamiseta = 'M';

// const tamanhoInvalido: TamanhoCamiseta = 'XG';
// Type '"XG"' is not assignable to type 'TamanhoCamiseta'.

type Regiao = 'norte' | 'nordeste' | 'centro-oeste' | 'sudeste' | 'sul';

function calcularFrete(regiao: Regiao): number {
  switch (regiao) {
    case 'norte': return 25;
    case 'nordeste': return 20;
    case 'centro-oeste': return 18;
    case 'sudeste': return 12;
    case 'sul': return 15;
  }
}

const complemento: string | null = null;
const textoComplemento = complemento !== null ? complemento : '(sem complemento)';

function limparTelefone(tel: string | number): string {
  const telString = typeof tel === 'number' ? tel.toString() : tel;
  return telString.replace(/\D/g, ''); 
}

const r = 'sul'; // O TypeScript infere o tipo exatamente como "sul".
calcularFrete(r);

let r2 = 'sul'; // O TypeScript infere o tipo genérico "string"
// calcularFrete(r2); 
// Argument of type 'string' is not assignable to parameter of type 'Regiao'.

// Correção 1: Usar 'as const' para travar a inferência no literal exato
let r2Corrigido = 'sul' as const;
calcularFrete(r2Corrigido);

// Correção 2: Ou anotar o tipo explicitamente na declaração do let
let r3: Regiao = 'sul';
calcularFrete(r3);

const codCliente = formatarCodigo(42);
const tamCamiseta: TamanhoCamiseta = 'M';
const endereco = `Rua das Flores, 100 - ${textoComplemento}`;
const valorFrete = calcularFrete('sul');
const telLimpo = limparTelefone('(69) 99999-0000');

console.log(`Cliente: ${codCliente} | Camiseta: ${tamCamiseta}`);
console.log(`Entrega: ${endereco}`);
console.log(`Frete para o sul: R$ ${valorFrete.toFixed(2)}`);
console.log(`Telefone: ${telLimpo}`);