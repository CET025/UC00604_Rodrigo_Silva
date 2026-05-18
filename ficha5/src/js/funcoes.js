// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO Registo de Inscritos Array -----------------------------------


let work = [];

// Está feito

function RegistarWork() {
    if (work.length < 15) {
        if ((Number($('#Idade').val())) >= 16) {
            work.push([
                Number($('#NIF').val()),
                $('#Nome').val(),
                $('#Morada').val(),
                (Number($('#Idade').val())),
                Number($('#Telefone').val()),
                $('#work').val()
            ]);

            alert("Registo feito com sucesso!"); // Aviso de mensagem ao utilizador

        } else {
            alert("Não tem idade mínima para se inscrever"); // Aviso de mensagem ao utilizador
        }


    } else {
        alert("Já não há vagas!"); // Aviso de mensagem ao utilizador
    }
}


// Criação da listagem
function ListaWork() {

    let txt = "";

    for (let i = 0; i < work.length; i++) {
        txt += "<tr>";
        txt += "<td>" + [i + 1] + "</td>";
        txt += "<td>" + work[i][0] + "</td>";
        txt += "<td class='numero'>" + work[i][1] + "</td>";
        txt += "<td class='numero'>" + work[i][2] + "</td>";
        txt += "<td class='numero'>" + work[i][3] + "</td>";
        txt += "<td class='numero'>" + work[i][4] + "</td>";
        txt += "<td class='numero'>" + work[i][5] + "</td>";
        txt += "<td><button type='button' onclick='Dados(" + i + ")'>Editar</button></td>";
        txt += "</tr>";
    }

    $("#ListaInscritos").html(txt);
}


function getCurso(curso) {

    // Mostrar todos
    if (curso == "-99") {
        ListaWork();
        return;
    }

    let txt = "";

    for (let i = 0; i < work.length; i++) {

        // O curso está na posição 5
        if (work[i][5] == curso) {

            txt += "<tr>";
            txt += "<td>" + (i + 1) + "</td>";
            txt += "<td>" + work[i][0] + "</td>";
            txt += "<td>" + work[i][1] + "</td>";
            txt += "<td>" + work[i][2] + "</td>";
            txt += "<td>" + work[i][3] + "</td>";
            txt += "<td>" + work[i][4] + "</td>";
            txt += "<td>" + work[i][5] + "</td>";
            txt += "</tr>";
        }
    }

    $("#ListaInscritos").html(txt);
}


function validaIdade(Idade) {

    let flag = true;

    for (let i = 0; i < work.length; i++) {

        if (work[i][3] <= 16) {
            flag = false;
            break;
        }
    }

    return flag;
}

