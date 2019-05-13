/*alert('Seja Bem-vindo');

let docePreferido = "pudim";
console.log(docePreferido);

let meuNumero = 20;
meuNumero = 1.20;
console.log(meuNumero);

let valido = true;
console.log('valido1:', valido)
valido = false;
console.log('valido2:', valido);

let minhaReceita = ["farinha", "bacon", "manteiga"];
console.log(minhaReceita.length);
console.log(minhaReceita);

let chocolate = {
    marca: "Nestlé",
    tamanho: 90,
    peso: "grama",
    formato: "barra",
    validade: 2019,
};
console.log(chocolate);

//subtração
let anoAtual = 2050;
console.log(anoAtual);
let anoNascimento = 1995;

let idade = anoAtual - anoNascimento;
let maiorIdadeBR = 18;
let maiorIdadeUSA = 21;

let idoso = 60;
console.log(idade < 18)
console.log(maiorIdadeBR)

console.log('idade:', idade);
console.log('é maior idade Brasil:', idade > maiorIdadeBR);
console.log ('é maior idade USA:', idade > maiorIdadeUSA);
console.log ('é idoso', idade >= idoso)

console.log(idade > maiorIdadeBR)



if (idade>= idoso) {
 alert("Seja Bem-vindo, idoso");
} else {
    alert("Seja bem-vindo, jovem");
}

let produto = 5.99;
let carteira = 42;
let vezes = 2;

let conta = vezes * produto
console.log('valor da carteira:', carteira )
console.log('valor da conta', conta)
if (carteira >= conta) {
    alert ("uhul, to rico");
} else {
    alert("ixi, não tenho dinheiro!");
}

console.log(produto*vezes)

let biscoito1 = "Doritos"
let biscoito2 = "Fandangos"

let frase = biscoito1 + " e " + biscoito2 + "! ";
console.log(frase);

/* é obrigatório passar o nome e sobrenome e identidade*/

/*let nome = "Alexandre";
let sobrenome = "Martins";
let identidade = 12345;

if (nome != "" && sobrenome !="" && identidade !="" ) {
    console.log('ok! Você enviou o nome e sobrenome');
} else {
    console.log('você não passou nome e sobrenome');
}


/* é obrigatório passar o telefone residencial ou celular tenha no mínimo 8 carcateres*/

/*let telefoneResidencial = "222444555";
let celular = "999888777";

if(telefoneResidencial.length >= 8 || celular.length >=8) {
    console.log('Você adicionou celular ou telefone residencial');
} else {
    console.log('Você não passou telefone residencial ou celular');
}

/* nome, email. telefone */



/*let name = "nome da pessoa";
let email = "email@gmail.com";
let telefone = "";

if(name == "" ) {
    console.log('Você NÃO preencheu o nome');
} else if(email == "" ) {
    console.log('Você NÃO preencheu o email');
} else if(telefone == "") {
    console.log ('Você NÃO preencheu o telefone');
} else {
    console.log('Você preencheu o formulário com sucesso');
}
*/

/* Repetição com FOR */

/*let numero = 24;

console.log(++numero)

/* numero = numero +1 

for(let carneirinho = 0; carneirinho <= 20; carneirinho++) {
    console.log("meu carneirinho numero" + carneirinho);
}


/* carneirinho = 0
é menor ou igual a 20? SIM!
console.log('carneirinho 0')
carneirinho++

carneirinh = 1
é menor ou igual a 20? SIM!
console.log('carneirinho1')
carneirinho++


*/

let  listAlunos = ["Ale", "Karol", "Vinicios", "Karine", "Adriana", "Ramon"];
console.log('lista de alunos tamanho', listAlunos.length)

for(let aluno = 0; aluno <= listAlunos.length; aluno++){
console.log('Olá', listAlunos[aluno]);
}
