// -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO Registo de Inscritos Array -----------------------------------


let cliente = [];
let produto = [];
let orcamento = [];
// ------------------------------------------- CLIENTES -------------------------------------------------

function RegistarCliente() {

    let nome = validacaoNomeCliente($('#Nome').val());

    if (nome) {
        cliente.push([
            $('#Nome').val(),
            $('#email').val(),
            $('#NIF').val(),
            $('#Morada').val()
        ]);

        console.log(cliente);

        alert("Cliente registado!");

        SelecaoCliente();
    } else {
        alert("O nome do cliente já existe");
    }
}

function SelecaoCliente() {

    let msg = "<option value='-99'>Escolha um cliente</option>";

    for (let i = 0; i < cliente.length; i++) {

        msg += "<option value='" + i + "'>" + cliente[i][0] + "</option>";
    }

    $('#Clientes').html(msg);
}
// Criação da listagem
function ListaCliente() {

    let txt = "";

    for (let i = 0; i < cliente.length; i++) {

        txt += "<tr>";
        txt += "<td class='numero'>" + cliente[i][0] + "</td>";
        txt += "<td class='numero'>" + cliente[i][1] + "</td>";
        txt += "<td class='numero'>" + cliente[i][2] + "</td>";
        txt += "<td class='numero'>" + cliente[i][3] + "</td>";
        txt += "<td><button type='button' onclick='ClienteEdicao(" + i + ")'>Editar</button></td>";
        txt += "</tr>";
    }
     $("#LisCliente").html(txt);

}

function ClienteEdicao(posicao) {

    if (posicao == -99) {

        $('#NomeEditado').val("");
        $('#emailEditado').val("");
        $('#NIFEditado').val("");
        $('#MoradaEditado').val("");

        alert("Escolha um cliente");
    } else {
        $('#NomeEditado').val(cliente[posicao][0]);
        $('#emailEditado').val(cliente[posicao][1]);
        $('#NIFEditado').val(cliente[posicao][2]);
        $('#MoradaEditado').val(cliente[posicao][3]);

        $('#botaoCliente').attr("onclick", "edicaoNome(" + posicao + ")");
    }
}

function edicaoNome(posicao) {
    cliente[posicao][0] = $('#NomeEditado').val();
    cliente[posicao][1] = $('#emailEditado').val();
    cliente[posicao][2] = $('#NIFEditado').val();
    cliente[posicao][3] = $('#MoradaEditado').val();

    ListaCliente();

    alert("Cliente editado com sucesso!");
}

// Validação do nome do cliente
function validacaoNomeCliente(Nome) {

    let flag = true;

    for (let i = 0; i < cliente.length; i++) {

        if (Nome == cliente[i][0]) {
            flag = false;
            break;
        }
    }

    return flag;
}

// ------------------------------------------- PRODUTOS -------------------------------------------------

function RegistarProduto() {

    let validacao = validacaoReferenciaProdutos($('#referencia').val());

    if (validacao) {
        produto.push([
            $('#NomeProduto').val(),
            $('#referencia').val(),
            $('#preco').val(),
        ]);

        console.log(produto);

        alert("Produto registado!");

        SelecaoProduto();
    } else {
        alert("A referência do produto já existe");
    }
}


function SelecaoProduto() {

    let msg = "<option value='-99'>Escolha um produto</option>";

    for (let i = 0; i < produto.length; i++) {

        msg += "<option value='" + i + "'>" + produto[i][0] + "</option>";
    }

    $('#ListaProd').html(msg);
}
// Criação da listagem
function ListaProduto() {

    let txt = "";

    for (let i = 0; i < produto.length; i++) {

        txt += "<tr>";
        txt += "<td class='numero'>" + produto[i][0] + "</td>";
        txt += "<td class='numero'>" + produto[i][1] + "</td>";
        txt += "<td class='numero'>" + produto[i][2] + "</td>";
        txt += "<td class='numero'><button type='button' onclick='ProdutoEdicao(" + i + ")'>Editar</button></td>";
        txt += "</tr>";
    }
     $("#LisProduto").html(txt);

}

function ProdutoEdicao(posicao) {

    if (posicao == -99) {

        $('#precoEditado').val("");

        alert("Escolha um produto");
    } else {
        $('#precoEditado').val(produto[posicao][2]);
        $('#botaoProduto').attr("onclick", "edicaoNomeProduto(" + posicao + ")");
    }
}

function edicaoNomeProduto(posicao) {
    produto[posicao][2] = $('#precoEditado').val();

    ListaProduto();

    alert("Preço editado com sucesso!");
}

// Validação referencia do produto
function validacaoReferenciaProdutos(referencia) {

    let flag = true;

    for (let i = 0; i < produto.length; i++) {

        if (referencia == produto[i][1]) {
            flag = false;
            break;
        }
    }

    return flag;
}




// Criação da listagem
function RegistarOrcamento() {

    let numero = $('#norcamento').val();

    if (numero != "") {

        orcamento.push([
            numero= $('#norcamento').val()
        ]);

        console.log(orcamento);

        alert("Orçamento registado!");

    } else {

        alert("Introduza o número do orçamento!");
    }
}

function SelecaoClienteOrcamento() {

    let msg = "<option value='-99'>Escolha um cliente</option>";

    for (let i = 0; i < cliente.length; i++) {

        msg += "<option value='" + i + "'>" + cliente[i][0] + "</option>";
    }

    $('#Clientesorcamento').html(msg);
}
// Criação da listagem
function ListaClienteOrcamento() {

    let txt = "";

    for (let i = 0; i < cliente.length; i++) {

        txt += "<tr>";
        txt += "<td class='numero'>" + orcamento[i][0] + "</td>";
        txt += "<td class='numero'>" + cliente[i][0] + "</td>";
        txt += "<td class='numero'>" + Number(produto[i][1]) + "</td>";
        txt += "<td class='numero'>" + (produto[i][0]) + "</td>";
        txt += "<td class='numero'>" + Number(produto[i][2]) + "</td>";
        txt += "</tr>";
    }
     $("#ListaClienteOrcamentodados").html(txt);

}

