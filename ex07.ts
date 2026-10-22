export {};

type Notificador = (destinatario: string, mensagem: string) => void;

const porEmail: Notificador = (destinatario, mensagem) => {
  console.log(`[E-MAIL] para ${destinatario}: ${mensagem}`);
};

const porSms: Notificador = (destinatario, mensagem) => {
  if (mensagem.length > 160) {
    console.log("SMS ignorado: mensagem longa");
    return;
  }
  console.log(`[SMS] para ${destinatario}: ${mensagem}`);
};

const porApp: Notificador = (destinatario, mensagem) => {
  console.log(`[APP] para ${destinatario}: ${mensagem}`);
};

function notificarTodos(destinatarios: string[], mensagem: string, enviar: Notificador): void {
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
porSms('(69) 99999-0000', 'Informamos que amanhã teremos a nossa tradicional reunião bimestral para fechamento de notas, entrega de boletins e alinhamento sobre o próximo semestre letivo. Contamos com a presença de todos os responsáveis. A reunião será realizada no auditório da escola, às 18h. Agradecemos a compreensão e colaboração de todos.');

// const contar: Notificador = (d, m) => m.length;
// No TypeScript, assignabilidade de funções com retorno 'void' permite que funções que retornam valores sejam usadas onde 'void' é esperado. 
// O TypeScript ignora o valor retornado por essa função. 
