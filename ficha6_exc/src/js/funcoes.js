let tiposMusica = ["Pop", "Rock", "Clássica", "Jazz", "Fado", "Eletrónica", "Hip-Hop"];
let eventos = [];
let bandas = [];

function getSelectTipos() {

    if (tiposMusica.length == 0) {

        $('#tipoEvento, #tipoBanda')
            .prop('disabled', true)
            .html("<option value='-1' disabled selected>Sem dados registados</option>");

    } else {

        let msg = "<option value='-1'>Escolha um tipo</option>";

        for (let i = 0; i < tiposMusica.length; i++) {

            msg += "<option value='" + tiposMusica[i] + "'>" + tiposMusica[i] + "</option>";
        }

        $('#tipoEvento, #tipoBanda').prop('disabled', false).html(msg);
    }
}

function validaTipoMusica(tipo) {

    let flag = true;

    for (let i = 0; i < tiposMusica.length; i++) {

        if (tipo == tiposMusica[i]) {
            flag = false;
            break;
        }
    }

    return flag;
}

function registoTipoMusical() {

    let tipo = $('#novoTipoMusica').val();

    if (tipo == "") {

        alert("Introduza o tipo musical");

    } else {

        let resposta = validaTipoMusica(tipo);

        if (resposta) {

            tiposMusica.push(tipo);

            console.log(tiposMusica);

            alert("Tipo musical registado!");

            getSelectTipos();

            $('#novoTipoMusica').val("");

        } else {
            alert("Tipo musical já existe");
        }
    }
}

function validaEvento(numero) {

    let flag = true;

    for (let i = 0; i < eventos.length; i++) {

        if (numero == eventos[i][0]) {
            flag = false;
            break;
        }
    }

    return flag;
}

function validaBanda(codigo, nome) {

    let flag = true;

    for (let i = 0; i < bandas.length; i++) {

        if (codigo == bandas[i][1] || nome == bandas[i][0]) {
            flag = false;
            break;
        }
    }

    return flag;
}

function validaPublico(ie, nif) {

    let flag = true;

    for (let i = 0; i < eventos[ie][7].length; i++) {

        if (eventos[ie][7][i][1] == nif) {
            flag = false;
            break;
        }
    }

    return flag;
}

function RegistarEvento() {

    let numero = $('#N_registo').val();
    let local = $('#local').val();
    let latitude = $('#latitude').val();
    let longitude = $('#longitude').val();
    let horario = $('#horario').val();
    let tipo = $('#tipoEvento').val();

    if (numero == "" || local == "" || latitude == "" || longitude == "" || horario == "" || tipo == -1) {

        alert("É necessário preencher todos os campos");

    } else {

        let resposta = validaEvento(numero);

        if (resposta) {

            eventos.push([
                numero,
                local,
                latitude,
                longitude,
                horario,
                tipo,
                [], // Esses arrays para adicionar informações das bandas
                [] // Esses arrays  para adicionar informações dos eventos
            ]);

            console.log(eventos);

            alert("Evento registado!");

            getSelectEventos();

        } else {
            alert("Evento já existe");
        }
    }
}

function RegistarBandas() {

    let nome = $('#nomeBanda').val();
    let codigo = $('#codigoBanda').val();
    let tipo = $('#tipoBanda').val();

    if (nome == "" || codigo == "" || tipo == -1) {

        alert("Preencha todos os campos da banda");

    } else {

        let resposta = validaBanda(codigo, nome);

        if (resposta) {

            bandas.push([
                nome,
                codigo,
                tipo
            ]);

            console.log(bandas);

            alert("Banda registada!");

        } else {
            alert("Banda já existe");
        }
    }
}

function getSelectEventos() {

    if (eventos.length == 0) {

        $('#associarEvento, #publicoEvento, #listagemEventoBandas, #listagemEventoPublico')
            .prop('disabled', true)
            .html("<option value='-1' disabled selected>Sem dados registados</option>");

    } else {

        let msg = "<option value='-1'>Escolha um evento</option>";

        for (let i = 0; i < eventos.length; i++) {

            msg += "<option value='" + i + "'>" + eventos[i][0] + " - " + eventos[i][1] + "</option>";
        }

        $('#associarEvento, #publicoEvento, #listagemEventoBandas, #listagemEventoPublico')
            .prop('disabled', false)
            .html(msg);
    }
}

function bandaJaAssociada(ie, ib) {

    for (let i = 0; i < eventos[ie][6].length; i++) {

        if (eventos[ie][6][i] == ib) {
            return true;
        }
    }

    return false;
}

function checklistbandas() {

    let ie = $('#associarEvento').val();
    let msg = "";

    if (ie == -1) {

        $('#ChecagemdasBandas').html(msg);
        alert("É necessário escolha um evento");

    } else {

        let tipoEvento = eventos[ie][5];
        let encontrou = false;

        for (let i = 0; i < bandas.length; i++) {

            if (bandas[i][2] == tipoEvento) {

                encontrou = true;
                let checked = "";

                if (bandaJaAssociada(Number(ie), i)) {
                    checked = " checked";
                }

                msg += "<label class='checkbox-item'>";
                msg += "<input type='checkbox' value='" + i + "'" + checked + "> ";
                msg += bandas[i][0] + " (" + bandas[i][1] + ")";
                msg += "</label>";
            }
        }

        if (!encontrou) {
            msg = "<p class='font'>Não existem bandas do tipo " + tipoEvento + "</p>";
        }

        $('#ChecagemdasBandas').html(msg);
    }
}

function AssociacaodasBandas() {

    let ie = $('#associarEvento').val();

    if (ie == -1) {

        alert("Escolha um evento");

    } else {

        ie = Number(ie);
        eventos[ie][6] = [];

        let checks = $('#checkboxesBandas input:checked');

        for (let i = 0; i < checks.length; i++) {

            eventos[ie][6].push(Number(checks.eq(i).val()));

        }

        console.log(eventos);

        alert("Bandas associadas com sucesso!");
    }
}

function RegistarPublico() {

    let ie = $('#publicoEvento').val();
    let nome = $('#nomePublico').val();
    let nif = $('#nifPublico').val();
    let telemovel = $('#telemovelPublico').val();
    let email = $('#emailPublico').val();

    if (ie == -1) {

        alert("Escolha um evento");

    } else if (nome == "" || nif == "" || telemovel == "" || email == "") {

        alert("Preencha todos os campos do público");

    } else {

        ie = Number(ie);

        let resposta = validaPublico(ie, nif);

        if (resposta) {

            eventos[ie][7].push([
                nome,
                nif,
                telemovel,
                email
            ]);

            console.log(eventos);

            alert("Público registado com sucesso!");

        } else {
            alert("NIF já registado neste evento");
        }
    }
}

function listagemBandasEvento() {

    let ie = $('#listagemEventoBandas').val();
    let msg = "";

    if (ie == -1) {

        alert("Escolha um evento");

    } else {

        for (let i = 0; i < eventos[ie][6].length; i++) {

            let ib = eventos[ie][6][i];

            msg += "<li>" + bandas[ib][0] + " (" + bandas[ib][1] + ") - " + bandas[ib][2] + "</li>";
        }

        if (msg == "") {
            msg = "<li>Sem bandas associadas a este evento</li>";
        }

        $('#listaBandasEvento').html(msg);
    }
}

function listagemPublicoEvento() {

    let ie = $('#listagemEventoPublico').val();
    let txt = "";

    if (ie == -1) {

        alert("Escolha um evento");

    } else {

        for (let i = 0; i < eventos[ie][7].length; i++) {

            txt += "<tr>";
            txt += "<td class='linha'>" + eventos[ie][7][i][0] + "</td>";
            txt += "<td class='linha'>" + eventos[ie][7][i][1] + "</td>";
            txt += "<td class='linha'><button type='button' onclick='verDetalhesPublico(" + ie + ", " + i + ")'>Ver informação</button></td>";
            txt += "</tr>";
        }

        $('#tabelaPublico').html(txt);
    }
}

function verDetalhesPublico(ie, ip) {

    let p = eventos[ie][7][ip];
    let evento = eventos[ie][0] + " - " + eventos[ie][1];

    alert(
        "Nome: " + p[0] + "\n" +
        "NIF: " + p[1] + "\n" +
        "Telemóvel: " + p[2] + "\n" +
        "Email: " + p[3] + "\n" +
        "Evento: " + evento
    );
}


$(function() {
    getSelectTipos();
    getSelectEventos();
});