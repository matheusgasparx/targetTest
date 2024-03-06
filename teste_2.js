function Fibonacci(number) {
    let number1 = 0;
    let number2 = 1;
    let number3;

    while (true) {
        number3 = number1 + number2;
        if (number3 === number) {
            return `${number} é Ferbonnaci`;
        } else if (number3 > number) {
            return `${number} não é Ferbonacci`;
        }
        number1 = number2;
        number2 = number3;
    }
}
const numero = 55
const resultado = Fibonacci(numero)
console.log(resultado)

// Aqui fiz essa lógica em JS, pois sou mais familiarizado com a linguagem. 
// Tentei criar utilizando o laço for, mas não estava conseguindo encaixar o retorno em string.
// Utilizei também o número 55, pois seria o próximo número do exemplo.