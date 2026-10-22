export {};

enum StatusPedido {
  Recebido = 1,
  EmPreparo,
  SaiuParaEntrega,
  Entregue,
  Cancelado
}

enum FormaPagamento {
  PIX = 'PIX',
  CARTAO = 'CARTAO',
  DINHEIRO = 'DINHEIRO'
}   

function mensagem(status: StatusPedido): string {
  switch (status) {
    case StatusPedido.Recebido:
      return 'Recebemos seu pedido!';
    case StatusPedido.EmPreparo:
      return 'Seu pedido está sendo preparado 🍳';
    case StatusPedido.SaiuParaEntrega:
      return 'O entregador está a caminho 🛵';
    case StatusPedido.Entregue:
      return 'Pedido entregue. Bom apetite!';
    case StatusPedido.Cancelado:
      return 'Pedido cancelado.';
    default:
      return 'Status desconhecido.';
  }
}

function avancar(status: StatusPedido): StatusPedido {
  if (status === StatusPedido.Entregue || status === StatusPedido.Cancelado) {
    return status;
  }
  return status + 1;
}

console.log(StatusPedido[2]); // Exibe 'EmPreparo'

let statusAtual: StatusPedido = StatusPedido.Recebido;

while (statusAtual <= StatusPedido.Entregue) {
  const nomeStatus = StatusPedido[statusAtual];
  console.log(`[${statusAtual} - ${nomeStatus}] ${mensagem(statusAtual)}`);

  if (statusAtual === StatusPedido.Entregue) {
    break;
  }
  statusAtual = avancar(statusAtual);
}

const pagamento: FormaPagamento = FormaPagamento.PIX;
console.log(`Pagamento: ${pagamento}`);

// let pagamentoTeste: FormaPagamento = 'PIX'; 
// Type '"PIX"' is not assignable to type 'FormaPagamento'.