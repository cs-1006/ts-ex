var StatusPedido;
(function (StatusPedido) {
    StatusPedido[StatusPedido["Recebido"] = 1] = "Recebido";
    StatusPedido[StatusPedido["EmPreparo"] = 2] = "EmPreparo";
    StatusPedido[StatusPedido["SaiuParaEntrega"] = 3] = "SaiuParaEntrega";
    StatusPedido[StatusPedido["Entregue"] = 4] = "Entregue";
    StatusPedido[StatusPedido["Cancelado"] = 5] = "Cancelado";
})(StatusPedido || (StatusPedido = {}));
var FormaPagamento;
(function (FormaPagamento) {
    FormaPagamento["PIX"] = "PIX";
    FormaPagamento["CARTAO"] = "CARTAO";
    FormaPagamento["DINHEIRO"] = "DINHEIRO";
})(FormaPagamento || (FormaPagamento = {}));
function mensagem(status) {
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
function avancar(status) {
    if (status === StatusPedido.Entregue || status === StatusPedido.Cancelado) {
        return status;
    }
    return status + 1;
}
console.log(StatusPedido[2]); // Exibe 'EmPreparo'
let statusAtual = StatusPedido.Recebido;
while (statusAtual <= StatusPedido.Entregue) {
    const nomeStatus = StatusPedido[statusAtual];
    console.log(`[${statusAtual} - ${nomeStatus}] ${mensagem(statusAtual)}`);
    if (statusAtual === StatusPedido.Entregue) {
        break;
    }
    statusAtual = avancar(statusAtual);
}
const pagamento = FormaPagamento.PIX;
console.log(`Pagamento: ${pagamento}`);
export {};
// let pagamentoTeste: FormaPagamento = 'PIX'; 
// Type '"PIX"' is not assignable to type 'FormaPagamento'.
