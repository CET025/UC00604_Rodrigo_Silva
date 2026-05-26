let especies = [];
let areas = [];
let animais = [];
let visitantes = [];


function mostrarModal(tipo, mensagem, titulo) {

    let icone = "";
    let tituloFinal = titulo;
    let btnClass = "";

    if (tipo == "sucesso") {

        icone = "&#10003;";
        tituloFinal = tituloFinal || "Sucesso";
        btnClass = "btn-modal-sucesso";

    } else {

        icone = "!";
        tituloFinal = tituloFinal || "Atenção";
        btnClass = "btn-modal-erro";
    }

    $('#modalMensagemIcone').html(icone);
    $('#modalMensagemTitulo').text(tituloFinal);
    $('#modalMensagemTexto').text(mensagem);

    $('#modalMensagemIconWrap')
        .removeClass('modal-icone-sucesso modal-icone-erro')
        .addClass(tipo == "sucesso" ? 'modal-icone-sucesso' : 'modal-icone-erro');

    $('#modalMensagemBtn')
        .removeClass('btn-modal-sucesso btn-modal-erro btn-zoo')
        .addClass(btnClass);

    $('#modalMensagem').modal('show');
}

function validaEspecie(descricao) {

    for (let i = 0; i < especies.length; i++) {

        if (descricao == especies[i]) {
            return false;
        }
    }

    return true;
}

function validaReferenciaArea(ref) {

    for (let i = 0; i < areas.length; i++) {

        if (ref == areas[i][0]) {
            return false;
        }
    }

    return true;
}

function validaChipAnimal(chip) {

    for (let i = 0; i < animais.length; i++) {

        if (chip == animais[i][1]) {
            return false;
        }
    }

    return true;
}

function validaVisitante(cc) {

    for (let i = 0; i < visitantes.length; i++) {

        if (cc == visitantes[i][2]) {
            return false;
        }
    }

    return true;
}

function registaEspecie() {

    let descricao = $('#descEspecie').val().trim();

    if (descricao == "") {

        mostrarModal("erro", "Introduza a descrição da espécie");

    } else if (validaEspecie(descricao)) {

        especies.push(descricao);

        console.log(especies);

        mostrarModal("sucesso", "Espécie registada com sucesso!");

        getSelectEspecies();
        $('#descEspecie').val("");

    } else {
        mostrarModal("erro", "Espécie já existente");
    }
}

function registaArea() {

    let ref = $('#refArea').val().trim();
    let desc = $('#descArea').val().trim();

    if (ref == "" || desc == "") {

        mostrarModal("erro", "Preencha a referência e a descrição da área");

    } else if (validaReferenciaArea(ref)) {

        areas.push([ref, desc]);

        console.log(areas);

        mostrarModal("sucesso", "Área registada com sucesso!");

        getSelectAreas();
        $('#refArea, #descArea').val("");

    } else {
        mostrarModal("erro", "Referência de área já existente");
    }
}

function registaAnimal() {

    let nome = $('#nomeAnimal').val().trim();
    let chip = $('#chipAnimal').val().trim();
    let data = $('#dataAnimal').val();
    let ie = $('#especieAnimal').val();
    let ia = $('#areaAnimal').val();

    if (nome == "" || chip == "" || data == "") {

        mostrarModal("erro", "Preencha todos os campos do animal");

    } else if (ie == -1 || ia == -1) {

        mostrarModal("erro", "Escolha a espécie e a área do animal");

    } else if (validaChipAnimal(chip)) {

        animais.push([
            nome,
            chip,
            data,
            Number(ie),
            Number(ia)
        ]);

        console.log(animais);

        mostrarModal("sucesso", "Animal registado com sucesso!");

        $('#nomeAnimal, #chipAnimal, #dataAnimal').val("");
        $('#especieAnimal, #areaAnimal').val("-1");

    } else {
        mostrarModal("erro", "Número de chip já existente");
    }
}

function registaVisitante() {

    let nome = $('#nomeVisitante').val().trim();
    let email = $('#emailVisitante').val().trim();
    let cc = $('#ccVisitante').val().trim();

    if (nome == "" || email == "" || cc == "") {

        mostrarModal("erro", "Preencha todos os campos do visitante");

    } else if (validaVisitante(cc)) {

        visitantes.push([
            nome,
            email,
            cc,
            []
        ]);

        console.log(visitantes);

        mostrarModal("sucesso", "Visitante registado com sucesso!");

        getSelectVisitantes();

        $('#nomeVisitante, #emailVisitante, #ccVisitante').val("");

    } else {
        mostrarModal("erro", "Visitante já existente no sistema");
    }
}

function getSelectEspecies() {

    if (especies.length == 0) {

        $('#especieAnimal')
            .prop('disabled', true)
            .html("<option value='-1' disabled selected>Sem espécies registadas</option>");

    } else {

        let msg = "<option value='-1'>Escolha uma espécie</option>";

        for (let i = 0; i < especies.length; i++) {
            msg += "<option value='" + i + "'>" + especies[i] + "</option>";
        }

        $('#especieAnimal').prop('disabled', false).html(msg);
    }
}

function getSelectAreas() {

    if (areas.length == 0) {

        $('#areaAnimal')
            .prop('disabled', true)
            .html("<option value='-1' disabled selected>Sem áreas registadas</option>");

    } else {

        let msg = "<option value='-1'>Escolha uma área</option>";

        for (let i = 0; i < areas.length; i++) {
            msg += "<option value='" + i + "'>" + areas[i][0] + " - " + areas[i][1] + "</option>";
        }

        $('#areaAnimal').prop('disabled', false).html(msg);
    }
}

function getSelectVisitantes() {

    if (visitantes.length == 0) {

        $('#visitanteAreas, #visitanteListagem')
            .prop('disabled', true)
            .html("<option value='-1' disabled selected>Sem visitantes registados</option>");

    } else {

        let msg = "<option value='-1'>Escolha um visitante</option>";

        for (let i = 0; i < visitantes.length; i++) {
            msg += "<option value='" + i + "'>" + visitantes[i][0] + " (" + visitantes[i][2] + ")</option>";
        }

        $('#visitanteAreas, #visitanteListagem').prop('disabled', false).html(msg);
    }
}

function areaJaEscolhida(iv, ia) {

    for (let i = 0; i < visitantes[iv][3].length; i++) {

        if (visitantes[iv][3][i] == ia) {
            return true;
        }
    }

    return false;
}

function getCheckboxesAreas() {

    let iv = $('#visitanteAreas').val();
    let msg = "";

    if (iv == -1) {

        $('#checkboxesAreas').html(msg);
        mostrarModal("erro", "Escolha um visitante");

    } else if (areas.length == 0) {

        msg = "<p class='text-muted mb-0'>Não existem áreas registadas</p>";
        $('#checkboxesAreas').html(msg);

    } else {

        for (let i = 0; i < areas.length; i++) {

            let checked = "";

            if (areaJaEscolhida(Number(iv), i)) {
                checked = " checked";
            }

            msg += "<label class='checkbox-item d-block mb-2'>";
            msg += "<input type='checkbox' class='form-check-input me-2' value='" + i + "'" + checked + "> ";
            msg += areas[i][0] + " - " + areas[i][1];
            msg += "</label>";
        }

        $('#checkboxesAreas').html(msg);
    }
}

function registarAreasVisitante() {

    let iv = $('#visitanteAreas').val();

    if (iv == -1) {

        mostrarModal("erro", "Escolha um visitante");

    } else if (areas.length == 0) {

        mostrarModal("erro", "Não existem áreas registadas");

    } else {

        iv = Number(iv);
        visitantes[iv][3] = [];

        let checks = $('#checkboxesAreas input:checked');

        for (let i = 0; i < checks.length; i++) {
            visitantes[iv][3].push(Number(checks.eq(i).val()));
        }

        console.log(visitantes);

        mostrarModal("sucesso", "Áreas registadas com sucesso!");
    }
}

function listarAreasVisitante() {

    let iv = $('#visitanteListagem').val();
    let txt = "";

    if (iv == -1) {

        mostrarModal("erro", "Escolha um visitante");

    } else {

        iv = Number(iv);

        for (let i = 0; i < visitantes[iv][3].length; i++) {

            let ia = visitantes[iv][3][i];

            txt += "<tr>";
            txt += "<td>" + areas[ia][0] + "</td>";
            txt += "<td>" + areas[ia][1] + "</td>";
            txt += "<td class='text-center'>";
            txt += "<button type='button' class='btn btn-sm btn-outline-zoo' onclick='verAnimaisArea(" + ia + ")'>Ver animais</button>";
            txt += "</td>";
            txt += "</tr>";
        }

        if (txt == "") {
            txt = "<tr><td colspan='3' class='text-center text-muted'>Sem áreas escolhidas</td></tr>";
        }

        $('#tabelaAreasVisitante').html(txt);
    }
}

function verAnimaisArea(ia) {

    let titulo = "Animais — " + areas[ia][0] + " (" + areas[ia][1] + ")";
    let txt = "";
    let encontrou = false;

    for (let i = 0; i < animais.length; i++) {

        if (animais[i][4] == ia) {

            encontrou = true;

            txt += "<tr>";
            txt += "<td>" + animais[i][0] + "</td>";
            txt += "<td>" + animais[i][1] + "</td>";
            txt += "<td>" + animais[i][2] + "</td>";
            txt += "<td>" + especies[animais[i][3]] + "</td>";
            txt += "</tr>";
        }
    }

    if (!encontrou) {
        txt = "<tr><td colspan='4' class='text-center text-muted'>Não existem animais registados nesta área.</td></tr>";
    }

    $('#modalAnimaisAreaTitulo').text(titulo);
    $('#modalAnimaisAreaCorpo').html(txt);

    $('#modalAnimaisArea').modal('show');
}

function enviarContacto() {

    let nome = $('#contactoNome').val().trim();
    let email = $('#contactoEmail').val().trim();
    let mensagem = $('#contactoMensagem').val().trim();

    if (nome == "" || email == "" || mensagem == "") {

        mostrarModal("erro", "Preencha todos os campos do formulário de contacto");

    } else {

        mostrarModal("sucesso", "Obrigado " + nome + "! A sua mensagem foi enviada com sucesso.", "Mensagem enviada");

        $('#contactoNome, #contactoEmail, #contactoMensagem').val("");
    }
}

$(function() {
    getSelectEspecies();
    getSelectAreas();
    getSelectVisitantes();
});