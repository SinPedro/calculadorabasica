
console.log("VAMOS COMEÇAR:");


let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));


const operc = prompt("Digite o símbolo que deseja usar na operação: (+,-,* e /))") ;



if (operc === "+"){
   console.log("o resultado da operação é", numero1 + numero2)
}
else if (operc === "-"){
    console.log("o resultado da operação é", numero1 - numero2)
 }
 else if (operc === "*"){
    console.log("o resultado da operação é", numero1 * numero2)
 }
 else if (operc === "/"){
    console.log("o resultado da operação é", numero1 / numero2)
 }
 else {
    console.log("o resultado da operação é impossível de ser gerado")
 }

