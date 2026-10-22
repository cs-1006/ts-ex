const leituras = [
    ['Porto Velho', 34],
    ['Curitiba', 12],
    ['Manaus', 31],
    ['Porto Alegre', 9],
    ['Natal', 29]
];
function extremos(temps) {
    const minima = Math.min(...temps);
    const maxima = Math.max(...temps);
    return [minima, maxima];
}
const temperaturasArray = leituras.map(([_, temp]) => temp);
const [minima, maxima] = extremos(temperaturasArray);
for (const [cidade, temp] of leituras) {
    console.log(`${cidade}: ${temp}°C`);
}
const contatoComEmail = ['Mariana', '(69) 99888-7766', 'mariana@news.com'];
const contatoSemEmail = ['Roberto', '(69) 99777-5544'];
const historicoSemanal = ['Porto Velho', 34, 32, 35, 33, 30, 31, 32];
// Separando o nome da cidade e pegando o resto como temperaturas
const [cidadeHist, ...tempsHist] = historicoSemanal;
const somaTemps = tempsHist.reduce((acc, t) => acc + t, 0);
const mediaTemps = somaTemps / tempsHist.length;
console.log(`Mínima: ${minima}°C | Máxima: ${maxima}°C | Média: ${mediaTemps.toFixed(1)}°C`);
const capitalOficial = ['RO', 'Porto Velho'];
export {};
// capitalOficial[0] = 'AC';
// Cannot assign to '0' because it is a read-only property.
