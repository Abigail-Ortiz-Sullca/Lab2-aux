const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function greetUser(nombre) {
    console.log(`Hola, ${nombre}!`);
}

rl.question('Por favor, escriba su nombre: ', (nombre) => {
    greetUser(nombre);
    rl.close();
});
