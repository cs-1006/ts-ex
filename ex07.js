const porEmail = (destinatario, mensagem) => {
    console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};
const porSms = (destinatario, mensagem) => {
    if (mensagem.length > 160) {
        console.log("SMS ignorado: mensagem longa");
        return;
    }
    console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};
const porApp = (destinatario, mensagem) => {
    console.log(`[APP] para ${destinatario}: ${mensagem}`);
};
function notificarTodos(destinatarios, mensagem, enviar) {
    destinatarios.forEach(destinatario => {
        enviar(destinatario, mensagem);
    });
}
// function teste(): void {
//   return 10;
// }
// Type 'number' is not assignable to type 'void'.
porEmail('ana@escola.com', 'Notas de matemática disponíveis');
porApp('joao.resp', 'Aula de quarta-feira cancelada');
porSms('(69) 99999-0000', 'Informamos que amanhã teremos a nossa tradicionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal reunião bimestral para fechamento de notas, entrega de boletins e alinhamento sobre o próximo semestre letivo.');
export {};
// const contar: Notificador = (d, m) => m.length;
// No TypeScript, assignabilidade de funções com retorno 'void' permite que funções que retornam valores sejam usadas onde 'void' é esperado. 
// O TypeScript ignora o valor retornado por essa função. 
