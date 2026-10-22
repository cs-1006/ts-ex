export {};

function lerComAny(json: string) {
  const dados: any = JSON.parse(json);
  return dados.temperatura.toFixed(1); // Compila, mas gera TypeError se 'temperatura' não for número
}

function falhar(mensagem: string): never {
  throw new Error(mensagem);
}

interface Clima {
  cidade: string;
  temperatura: number;
}

function lerClima(json: string): Clima {
  const dados: unknown = JSON.parse(json);

  if (typeof dados !== 'object' || dados === null) {
    falhar('Dados inválidos');
  }

  if (!('cidade' in dados) || typeof (dados as Record<string, unknown>).cidade !== 'string') {
    falhar('campo "cidade" inválido');
  }

  if (!('temperatura' in dados) || typeof (dados as Record<string, unknown>).temperatura !== 'number') {
    falhar('campo "temperatura" inválido');
  }

  return dados as Clima;
}

const respostaOk = '{"cidade":"Porto Velho","temperatura":34,"umidade":0.62}';
const respostaQuebrada = '{"cidade":"Porto Velho","temperatura":"quente"}';
const respostaInvalida = '{ cidade: Porto Velho ';

const respostas = [respostaOk, respostaQuebrada, respostaInvalida];

respostas.forEach(res => {
  try {
    const clima = lerClima(res);
    console.log(`${clima.cidade}: ${clima.temperatura.toFixed(1)}°C`);
  } catch (erro: unknown) {

    if (erro instanceof SyntaxError) {
      console.log('Erro: JSON malformado');
    } 
  
    else if (erro instanceof Error) {
      console.log(`Erro: ${erro.message}`);
    }
  }
});