function ReverseString (string) {
    let invertida = ""

    for (let i = string.length - 1; i >= 0; i--) {
        invertida += string[i]
    }
    return invertida;
}

const fraseString = "Hello Target"
const stringInvertida = ReverseString(fraseString)
console.log(stringInvertida)


// Utilizei a linguagem JS também, e o laço for para percorrer a frase