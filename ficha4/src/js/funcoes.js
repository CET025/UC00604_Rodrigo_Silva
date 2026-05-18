// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO Registo de Produtos Array -----------------------------------
// Criação de arrays de maneira geral, para poder dar stop no comandos definidos a seguir
let Nome = []; // Criação de um array global para Nome da equipa (limites não definidos)
let NV = []; // Criação de um array global para Numero de vitorias (limites não definidos)
let ND = []; // Criação de um array global para Numero de derrotas (limites não definidos)
// OBS: É necessário criar os Arrays fora da função para não haver conflitos

let equipas = []; // Criação de um array único com todas informações solicitadas (Nome, NV, ND)


function RegistarEquipa() { // Criação da função para registos de equipas dentro de uma estrutura array
    // Foi criada uma estrutura if apenas para delimitar o limite de registos dentro do array sendo n
 if (equipas.length < 5) { // Neste caso o array equipas vai identificar os espaçamentos  [X,Y,Z.W,K]
    // É como se considerasse as informações de 3 em 3 (como blocos de informação)

        let aviso = validaNome($('#Nome').val()); // Verificação dos nomes da equipas para não haver repeticões 

        if (aviso) {
            equipas.push([
                $('#Nome').val(), // push para cada coluna guardada correspondente ao seu ID #Nome
                Number($('#NV').val()),// push para cada coluna guardada correspondente ao seu ID #NV
                Number($('#ND').val())// push para cada coluna guardada correspondente ao seu ID #ND
            ]);

            console.log(equipas);

            alert("Equipa registada!"); // Aviso de mensagem ao utilizador

            getSelectEquipas(); //Função para atualizar a lista da box
        }else{
            alert("O nome da equipa já existente"); // Aviso de mensagem ao utilizador
        }


    } else {
        alert("Limite de 5 equipas atingido!"); // Aviso de mensagem ao utilizador
    }
}

function QuadroResultados() {

    let txt = "";

    for (let i = 0; i < equipas.length; i++) {
        txt += "<tr>";
        txt += "<td>" + equipas[i][0] + "</td>"; // Identificação da posição dos nomes das equipas #Nome
        txt += "<td class='numero'>" + equipas[i][1] + "</td>"; // Identificação da posição dos NV das equipas #NV
        txt += "<td class='numero'>" + equipas[i][2] + "</td>"; // Identificação da posição dos NV das equipas #ND
        txt += "<td class='numero'>" + (equipas[i][1] / (equipas[i][1] + equipas[i][2]) * 100).toFixed(0) + "%</td>"; // Calculo das percentagen
        txt += "<td><button type='button' onclick='getDados(" + i + ")'>Editar</button></td>";
        txt += "</tr>";
    }

    $("#ListaBasquete").html(txt) // Substituição do inner.HTLM por HTML(NomeDoVetor)
}

function getDados(posicionamento) {

if (posicionamento == -1) { // Deixa a informação guardada fora da posição [-1] do array 
// perguntar ao professor -- AQUI
        $('#nomeEdit').val(); // Registo do nome das equipas editadas e ("") serve para limpar as caixas
        $('#NVEdit').val(); // Registo do numero de vitorias editadas e ("") serve para limpar as caixas
        $('#NDEdit').val();// Registo do numero de derrotas editadas e ("") serve para limpar as caixas

        alert("Escolha uma equipa"); // Aviso ao utilizador
    } else {
        $('#nomeEdit').val(equipas[posicionamento][0]);  // Registo do nome das equipas editadas na posição correspondente do array
        $('#NVEdit').val(equipas[posicionamento][1]); // Registo do numero de vitorias editadas na posição correspondente do array
        $('#NDEdit').val(equipas[posicionamento][2]); // Registo do numero de derrotas editadas na posição correspondente do array

        $('#btn').attr("onclick", "editarEquipa(" + posicionamento + ")"); // Botão de edição da equipa
    }
}

function editarEquipa(posicionamento) {
    equipas[posicionamento][0] = $('#nomeEdit').val(); // nomes alterados de acordo com seu posicionamento
    equipas[posicionamento][1] = $('#NVEdit').val(); // Numero de vitorias alterados de acordo com seu posicionamento
    equipas[posicionamento][2] = $('#NDEdit').val(); // Numero de derrotas alterados de acordo com seu posicionamento

    QuadroResultados(); // Retorno da tabela atualizada após as edições
}

function getSelectEquipas() {

    let msg = "<option value='-1'>Escolha uma equipa</option>"; // A escolha da equipa fica guarda na posição -1? PERGUNTAR AQUI

    for (let i = 0; i < equipas.length; i++) { // 

        msg += "<option value='" + i + "'>" + equipas[i][0] + "</option>";
    }

    $('#listaEquipas').html(msg);
}

function validaNome(nome) {

    let flag = true;

    for (let i = 0; i < equipas.length; i++) {

        if (nome == equipas[i][0]) {
            flag = false;
            break;
        }
    }

    return flag;
}
