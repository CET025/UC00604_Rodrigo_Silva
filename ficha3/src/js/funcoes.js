// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO Registo de Produtos Array -----------------------------------
// Criação de arrays de maneira geral, para poder dar stop no comandos definidos a seguir
let Nome = []; // Criação de um array global para Nome da equipa (limites não definidos)
let NV = []; // Criação de um array global para Numero de vitorias (limites não definidos)
let ND = []; // Criação de um array global para Numero de derrotas (limites não definidos)
// OBS: É necessário criar os Arrays fora da função para não haver conflitos

function RegistarEquipa() { // Criação da função para registos de produtos dentro de uma estrutura array
    // Foi criada uma estrutura if apenas para delimitar o limite de registos dentro do array sendo n
    if (Nome.length < 5) {
        alert("Equipa registada!"); // mensagem de alerta ao se fazer o registo, pode também ser usado let Alerta = "" e depois
        // especificar dentro do if Alerta = "Equipa registada". A diferença é que esta mensagem aparece na parte de baixo do botão
        // e o alert vai ser a mensagem a aparecer na página após apertar no botão.
        Nome.push(document.getElementById('Nome').value) // push vai guardar a informação dos Nome inseridos dentro
        // do array global criado na parte de fora da função
        NV.push(Number(document.getElementById('NV').value))// push vai guardar o numero de vitorias inseridos dentro
        // do array global criado na parte de fora da função
        ND.push(Number(document.getElementById('ND').value))// push vai guardar o numero de derrotas inseridos dentro
    } else {
        alert("Não pode inserir mais que 5 equipas!");
    }
}

function QuadroResultados() {

    let txt = "";

    for (let i = 0; i < Nome.length; i++) {
        txt += "<tr>";
        txt += '<td>' + Nome[i] + '</td>';
        txt += "<td class='numero'>" + NV[i] + "</td>";
        txt += "<td class='numero'>" + ND[i] + "</td>";
        txt += "<td class='numero'>" + (NV[i] / (NV[i] + ND[i]) * 100).toFixed(0) + "%</td>";
        txt += "<td><button type='button' onclick='getDados(" + i + ")'>Editar</button></td>";
        txt += "</tr>";
    }

    document.getElementById("ListaBasquete").innerHTML = txt;
}

function getDados(posicionamento) {

    document.getElementById('nomeEdit').value = Nome[posicionamento];
    document.getElementById('NVEdit').value = NV[posicionamento];
    document.getElementById('NDEdit').value = ND[posicionamento];

    document.getElementById('botao').setAttribute("onclick", "Nomes_Alterador(" + posicionamento + ")");

}

function Nomes_Alterador(posicao) {

    Nome[posicao] = document.getElementById('nomeEdit').value;
    NV[posicao] = document.getElementById('NVEdit').value;
    ND[posicao] = document.getElementById('NDEdit').value;
    QuadroResultados();

}
