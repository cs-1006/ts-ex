export {};

// 1 e 2. Type Aliases e Período
type Placa = string;
type Periodo = [entrada: number, saida: number]; // [entrada, saida] em horas cheias

// 3 e 4. União Discriminada de Veículos
interface VeiculoBase {
  readonly placa: Placa;
}

interface Carro extends VeiculoBase {
  tipo: 'carro';
  portas: 2 | 4;
}

interface Moto extends VeiculoBase {
  tipo: 'moto';
  cilindradas: number;
}

interface Caminhao extends VeiculoBase {
  tipo: 'caminhao';
  eixos: number;
}

type Veiculo = Carro | Moto | Caminhao;

// 5. Enum de Situação
enum SituacaoTicket {
  Aberto = 'ABERTO',
  Pago = 'PAGO'
}

// 6. Tipo do Ticket
type Ticket = {
  veiculo: Veiculo;
  periodo: Periodo;
  selo: boolean;
  situacao: SituacaoTicket;
  valor?: number;
};

// 7, 8, 9, 10 e 11. Cálculo de Tarifa com Checagem Exaustiva (never)
function calcularTarifa(v: Veiculo, horas: number): number {
  const horasCobradas = Math.max(1, horas); // Pelo menos 1 hora
  let primeiraHora = 0;
  let horaAdicional = 0;

  switch (v.tipo) {
    case 'carro':
      primeiraHora = 8.0;
      horaAdicional = 5.0;
      break;
    case 'moto':
      primeiraHora = 4.0;
      horaAdicional = 2.0;
      break;
    case 'caminhao':
      primeiraHora = 15.0;
      horaAdicional = 10.0;
      break;
    default:
      // O tipo 'never' garante exaustividade. Se criarmos um novo tipo de veículo (ex: Van) 
      // e esquecermos de tratá-lo no switch, o TypeScript apontará erro de compilação aqui.
      const _naoTratado: never = v;
      return _naoTratado;
  }

  return primeiraHora + (horasCobradas - 1) * horaAdicional;
}

// 13. Função de registro no console
function registrar(msg: string): void {
  console.log(msg);
}

// 12. Fechar Ticket (Imutável usando Spread)
function fecharTicket(t: Ticket): Ticket {
  const [entrada, saida] = t.periodo;
  const horas = saida - entrada;
  let valorBruto = calcularTarifa(t.veiculo, horas);

  if (t.selo) {
    valorBruto *= 0.5; // 50% de desconto
  }

  const ticketFechado: Ticket = {
    ...t,
    situacao: SituacaoTicket.Pago,
    valor: valorBruto
  };

  const horasCobradas = Math.max(1, horas);
  const textoSelo = t.selo ? ' (selo -50%)' : '';
  
  registrar(
    `[${ticketFechado.situacao}] ${t.veiculo.placa} (${t.veiculo.tipo}) - ${horasCobradas}h - R$ ${valorBruto.toFixed(2)}${textoSelo}`
  );

  return ticketFechado;
}

// 14. Entrada externa com unknown e função never para erros
function falharVeiculo(msg: string): never {
  throw new Error(msg);
}

function lerVeiculo(json: string): Veiculo {
  const dados: unknown = JSON.parse(json);

  if (typeof dados !== 'object' || dados === null) {
    falharVeiculo('Dados do veículo inválidos');
  }

  const obj = dados as Record<string, unknown>;

  if (typeof obj.placa !== 'string') {
    falharVeiculo('Placa inválida');
  }

  if (typeof obj.tipo !== 'string') {
    falharVeiculo('Tipo inválido');
  }

  switch (obj.tipo) {
    case 'carro':
      return { placa: obj.placa, tipo: 'carro', portas: obj.portas === 2 || obj.portas === 4 ? obj.portas : 4 } as Carro;
    case 'moto':
      return { placa: obj.placa, tipo: 'moto', cilindradas: Number(obj.cilindradas) || 160 } as Moto;
    case 'caminhao':
      return { placa: obj.placa, tipo: 'caminhao', eixos: Number(obj.eixos) || 2 } as Caminhao;
    default:
      falharVeiculo(`Erro ao ler veículo: tipo "${obj.tipo}" desconhecido`);
  }
}

// 15. Dados de Teste e Relatório Final
const ticketsIniciais: Ticket[] = [
  { veiculo: { placa: 'ABC1D23', tipo: 'carro', portas: 4 }, periodo: [8, 11], selo: false, situacao: SituacaoTicket.Aberto },
  { veiculo: { placa: 'MOT0A12', tipo: 'moto', cilindradas: 160 }, periodo: [9, 10], selo: false, situacao: SituacaoTicket.Aberto },
  { veiculo: { placa: 'CAM9Z99', tipo: 'caminhao', eixos: 3 }, periodo: [7, 12], selo: false, situacao: SituacaoTicket.Aberto },
  { veiculo: { placa: 'XYZ4E56', tipo: 'carro', portas: 2 }, periodo: [14, 16], selo: true, situacao: SituacaoTicket.Aberto }
];

// Processando os tickets com map
const ticketsFechados = ticketsIniciais.map(t => fecharTicket(t));

// Calculando o faturamento total com reduce
const faturamentoTotal = ticketsFechados.reduce((acc, t) => acc + (t.valor ?? 0), 0);

// Contabilizando os tipos de veículos com reduce
const contagemTipos = ticketsFechados.reduce((acc, t) => {
  const tipo = t.veiculo.tipo;
  if (tipo === 'carro') acc.carro++;
  else if (tipo === 'moto') acc.moto++;
  else if (tipo === 'caminhao') acc.caminhao++;
  return acc;
}, { carro: 0, moto: 0, caminhao: 0 });

console.log(`Faturamento: R$ ${faturamentoTotal.toFixed(2)}`);
console.log(`Entradas: carro=${contagemTipos.carro}, moto=${contagemTipos.moto}, caminhao=${contagemTipos.caminhao}`);

// Testando leitura externa inválida (Bicicleta)
try {
  lerVeiculo('{"placa":"BIC1234","tipo":"bicicleta"}');
} catch (erro: unknown) {
  if (erro instanceof Error) {
    console.log(erro.message);
  }
}