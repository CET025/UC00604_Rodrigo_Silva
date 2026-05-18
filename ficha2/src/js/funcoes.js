// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO Registo de Produtos Array -----------------------------------
// Criação de arrays de maneira geral, para poder dar stop no comandos definidos a seguir
let ID = []; // Criação de um array global para ID (limites não definidos)
let Nome = []; // Criação de um array global para Nome (limites não definidos)
let Descricao = []; // Criação de um array global para Descrição (limites não definidos)
let Preco = []; // Criação de um array global para Preço (limites não definidos)
let Taxa = []; // Criação de um array global para Taxa (limites não definidos)
// OBS: É necessário criar os Arrays fora da função para não haver conflitos

function RegistarProdutos() { // Criação da função para registos de produtos dentro de uma estrutura array
    // Foi criada uma estrutura if apenas para delimitar o limite de registos dentro do array sendo n
    ID.push(document.getElementById('ID').value) // push vai guardar a informação dos IDs inseridos dentro
    // do array global criado na parte de fora da função
    Nome.push(document.getElementById('Nome').value)// push vai guardar o nome dos produtos inseridos dentro
    // do array global criado na parte de fora da função
    Descricao.push(document.getElementById('Descricao').value)// push vai guardar a informação da descrição inseridos dentro
    // do array global criado na parte de fora da função
    Preco.push(document.getElementById('Preco_sem_iva').value)// push vai guardar a informação dos preços inseridas dentro
    // do array global criado na parte de fora da função
    Taxa.push(document.getElementById('TaxaIVA').value)// push vai guardar a informação das taxas inseridas dentro
    // do array global criado na parte de fora da função
    alert("Produto registado!"); // mensagem de alerta ao se fazer o registo, pode também ser usado let Alerta = "" e depois
    // especificar dentro do if Alerta = "Registado com sucesso". A diferença é que esta mensagem aparece na parte de baixo do botão
    // e o alert vai ser a mensagem a aparecer na página após apertar no botão.
}

function ListarProdutos() {

    let txt = ""; // criação de uma variável de texto
    let precoIVA = 0; // Atribuição de valor zero a variável precoIVA

    for (let i = 0; i < ID.length; i++) { // i inicial é de zero até o comprimento das informações de matriculas, i++ (incremento positivo)
        txt += "<div class='box2 '>"; // Especifica as customizações pela class relacionadas a variável txt dentro do ambito
        txt += "<p class='titulo2'>" + Nome[i] + "(" + ID[i] + ") </p>"; // Especifica a customização pela class relacionada ao texto
        // neste caso existe um incremento i+1, como i inicial é zero, a 1º soma é igual a 1 e consecutivamente
        txt += "<p class='p1'>Nome do produto: " + Nome[i] + "</p>";// Adiciona a 1º informação da Nome no array 0 e sucessivamente
        txt += "<p class='p1'>Preço do produto sem IVA: " + Preco[i] + "</p>";// Adiciona a 1º informação da Preco no array 0 e sucessivamente
        txt += "<p class='p1'> O preço do produto com IVA: " + (Number(Preco[i]) + (Number(Preco[i]) * Number(Taxa[i] / 100))) + " euros </p>";
        txt += "</div>";
    }
    document.getElementById('ListaProdutos').innerHTML = txt;
}


// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO RegistarVeiculosArray -----------------------------------
// Criação de arrays de maneira geral, para poder dar stop no comandos definidos a seguir
let marca = []; // Criação de um array global para marca (limites não definidos)
let modelo = []; // Criação de um array global para modelo (limites não definidos)
let matricula = []; // Criação de um array global para matricula (limites não definidos)
let consumo = []; // Criação de um array global para consumo (limites não definidos)
let kms = []; // Criação de um array global para kms (limites não definidos)
// OBS: É necessário criar os Arrays fora da função para não haver conflitos

function Registoautomovel() { // Criação da função para registos de veículos dentro de uma estrutura array
    // Foi criada uma estrutura if apenas para delimitar o limite de registos dentro do array sendo n
    marca.push(document.getElementById('marca').value) // push vai guardar a informação das marca inseridas dentro
    // do array global criado na parte de fora da função
    modelo.push(document.getElementById('modelo').value)// push vai guardar a informação das modelo inseridas dentro
    // do array global criado na parte de fora da função
    matricula.push(document.getElementById('matricula').value)// push vai guardar a informação das matricula inseridas dentro
    // do array global criado na parte de fora da função
    consumo.push(document.getElementById('consumo').value)// push vai guardar a informação das consumo inseridas dentro
    // do array global criado na parte de fora da função
    kms.push(document.getElementById('kms').value)// push vai guardar a informação das kms inseridas dentro
    // do array global criado na parte de fora da função
    alert("Veículo registado!"); // mensagem de alerta ao se fazer o registo, pode também ser usado let Alerta = "" e depois
    // especificar dentro do if Alerta = "Registado com sucesso". A diferença é que esta mensagem aparece na parte de baixo do botão
    // e o alert vai ser a mensagem a aparecer na página após apertar no botão.
    console.log(matricula)
}


function Listaautomovel() {

    let txt = ""; // criação de uma variável de texto
    let totalkm = 0;
    let totalconsumo = 0;
    for (let i = 0; i < matricula.length; i++) { // i inicial é de zero até o comprimento das informações de matriculas, i++ (incremento positivo)
        txt += "<div class='box2'>"; // Especifica as customizações pela class relacionadas a variável txt dentro do ambito
        txt += "<p class='titulo2'>" + matricula[i] + "</p>"; // Especifica a customização pela class relacionada ao texto
        // neste caso existe um incremento i+1, como i inicial é zero, a 1º soma é igual a 1 e consecutivamente
        txt += "<p class='p1'> Quilómetros efectuados: " + kms[i] + "</p>";// Adiciona a 1º informação da kms no array 0 e sucessivamente
        txt += "<p class='p1'> Consumo: " + consumo[i] + "</p>";// Adiciona a 1º informação da consumo no array 0 e sucessivamente
        txt += "<p class='p1'> Média de consumo do automóvel: " + (Number(consumo[i]) / Number(kms[i])).toFixed(2) + " l/km </p>";
        txt += "</div>";

        totalkm += Number(kms[i]);
        totalconsumo += Number(consumo[i]);
    }
    let media = (totalconsumo/totalkm);
    txt += "<p class='titulo2'> Média de consumo total dos automóveis é: " + media.toFixed(2) + " l/km </p>";

    document.getElementById('Listacarros').innerHTML = txt;
}

