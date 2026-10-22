const nomeDigitado = ' maria da silva ';
function formatarNome(nome) {
    const excecoes = ['da', 'de', 'do'];
    return nome
        .trim()
        .split(/\s+/) // divide por um ou mais espaços
        .map((palavra, index) => {
        const pLower = palavra.toLowerCase();
        // Se for exceção e não for a primeira palavra, mantém minúscula
        if (excecoes.includes(pLower) && index !== 0) {
            return pLower;
        }
        // Primeira letra maiúscula, resto minúscula
        return pLower.charAt(0).toUpperCase() + pLower.slice(1);
    })
        .join(' ');
}
const precoLido = Number('12.40');
const quantidadeLida = parseInt('3un');
const clienteFidelidade = true;
const subtotal = precoLido * quantidadeLida;
const descontoFidelidade = clienteFidelidade ? subtotal * 0.05 : 0;
const total = subtotal - descontoFidelidade;
const numeroCupom = (42).toString().padStart(6, '0'); // "000042"
const cupomFiscal = `CUPOM Nº ${numeroCupom}
Cliente: ${formatarNome(nomeDigitado)}
Item: ${quantidadeLida} x R$ ${precoLido.toFixed(2)}
Subtotal: R$ ${subtotal.toFixed(2)}
Desconto fidelidade: R$ ${descontoFidelidade.toFixed(2)}
TOTAL: R$ ${total.toFixed(2)}`;
console.log(cupomFiscal);
export {};
