function lerComAny(json) {
    const dados = JSON.parse(json);
    return dados.temperatura.toFixed(1); // Compila, mas gera TypeError se 'temperatura' não for número
}
function falhar(mensagem) {
    throw new Error(mensagem);
}
function lerClima(json) {
    const dados = JSON.parse(json);
    if (typeof dados !== 'object' || dados === null) {
        falhar('Dados inválidos');
    }
    if (!('cidade' in dados) || typeof dados.cidade !== 'string') {
        falhar('campo "cidade" inválido');
    }
    if (!('temperatura' in dados) || typeof dados.temperatura !== 'number') {
        falhar('campo "temperatura" inválido');
    }
    return dados;
}
const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';
const respostas = [respostaOk, respostaQuebrada, respostaInvalida];
respostas.forEach(res => {
    try {
        const clima = lerClima(res);
        console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
    }
    catch (erro) {
        if (erro instanceof SyntaxError) {
            console.log('Erro: JSON malformado');
        }
        else if (erro instanceof Error) {
            console.log(`Erro: ${erro.message}`);
        }
    }
});
export {};
