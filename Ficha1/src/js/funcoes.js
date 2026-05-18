// Criação da função de soma
function calcularSoma() {

    let num1 = Number(document.getElementById('n1').value); // Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n1 e conversão do texto para numerico Number (.value)
    let num2 = Number(document.getElementById('n2').value); // Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n2 e conversão do texto para numerico Number (.value)

    let soma = num1 + num2; // Tipo de variável let para soma e operação

    console.log(soma); // Exibe o objeto guardado na operação

    document.getElementById('resultado_soma').innerHTML = soma; // Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}

// Criação da função de multiplicação
function calcularMul() {

    let num1 = Number(document.getElementById('n3').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n3 e conversão do texto para numerico Number (.value)
    let num2 = Number(document.getElementById('n4').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n4 e conversão do texto para numerico Number (.value)

    let mul = num1 * num2;// Tipo de variável let para mul e operação

    console.log(mul);// Exibe o objeto guardado na operação

    document.getElementById('resultado_mul').innerHTML = mul;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}


// Criação da função de divisão
function calcularDiv() {

    let num1 = Number(document.getElementById('n5').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n5 e conversão do texto para numerico Number (.value)
    let num2 = Number(document.getElementById('n6').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n6 e conversão do texto para numerico Number (.value)

    let div = num1 / num2;// Tipo de variável let para div e operação

    console.log(div);// Exibe o objeto guardado na operação

    document.getElementById('resultado_div').innerHTML = div;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}

// Criação da função de subtração
function calcularSub() {

    let num1 = Number(document.getElementById('n7').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n7 e conversão do texto para numerico Number (.value)
    let num2 = Number(document.getElementById('n8').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n8 e conversão do texto para numerico Number (.value)

    let sub = num1 - num2;// Tipo de variável let para sub e operação

    console.log(sub);// Exibe o objeto guardado na operação

    document.getElementById('resultado_sub').innerHTML = sub;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}


// Criação da função de media
function calcularMedia() {
    let num11 = (document.getElementById('nome').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n9 e conversão do texto para numerico Number (.value)
    let num21 = (document.getElementById('curso').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n10 e conversão do texto para numerico Number (.value)
    let num31 = (document.getElementById('turma').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n11 e conversão do texto para numerico Number (.value)

    let num1 = Number(document.getElementById('n9').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n9 e conversão do texto para numerico Number (.value)
    let num2 = Number(document.getElementById('n10').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n10 e conversão do texto para numerico Number (.value)
    let num3 = Number(document.getElementById('n11').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n11 e conversão do texto para numerico Number (.value)

    let media = (num1 + num2 + num3) / 3;// Tipo de variável let para media e operação

    if (media > 9.5) {
        document.getElementById('estadoAluno').innerHTML = "APROVADO";
    } else {
        document.getElementById('estadoAluno').innerHTML = "REPROVADO";
    }

    document.getElementById('nome_').innerHTML = num11;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('curso_').innerHTML = num21;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('turma_').innerHTML = num31;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('n9_').innerHTML = num1;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('n10_').innerHTML = num2;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('n11_').innerHTML = num3;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('resultado_media').innerHTML = media;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa

}

// Criação da função de temperatura F e K EXEMPLO DE DOIS CLACULOS NO MESMO BOTAO
function Calc_Temp() {

    let celcius = Number(document.getElementById('n14').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n14 e conversão do texto para numerico Number (.value)

    let TempF = (celcius * 1.8) + 32;// Tipo de variável let para Temp Fahrenheit e operação
    let TempK = celcius + 273.15;// Tipo de variável let para Temp Kelvin e operação

    console.log(TempF);// Exibe o objeto guardado na operação
    console.log(TempK);// Exibe o objeto guardado na operação

    document.getElementById('resultado_TempF').innerHTML = TempF;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
    document.getElementById('resultado_TempK').innerHTML = TempK.toFixed(2);// .toFixed(2) - Fixa as casas decimais, Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}


// Criação da função de VM e Classificação da Velocidade por IF ELSE
function Class_Vel() {

    let dist = Number(document.getElementById('n15').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n15 e conversão do texto para numerico Number (.value)
    let temp = Number(document.getElementById('n16').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n16 e conversão do texto para numerico Number (.value)

    let VM = (dist / temp);// Tipo de variável let para VM e operação

    if (VM < 0) {
             document.getElementById('resultado_Aviso').innerHTML = "Insira novamente os valores, sendo eles positivos";
    } else if (VM <= 90) {
        document.getElementById('resultado_Aviso').innerHTML = "A Velocidade é correcta";
    } else if (VM > 90 && VM <= 120) {
        document.getElementById('resultado_Aviso').innerHTML = "A Velocidade é excessiva";
    } else {
        document.getElementById('resultado_Aviso').innerHTML = "A Velocidade é muito excessiva";
    }
    console.log(VM);// Exibe o objeto guardado na operação
    console.log(Aviso);// Exibe o objeto guardado na operação

    document.getElementById('n15_').innerHTML = dist;
    document.getElementById('n16_').innerHTML = temp;
    document.getElementById('resultado_VM').innerHTML = VM;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}
// Criação da função de idade em dias por IF ELSE
function Class_Idade() {

    let nome = document.getElementById('n17').value;// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n17
    let idade = Number(document.getElementById('n18').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n18 e conversão do texto para numerico Number (.value)

    let Dias = (idade * 365);// Tipo de variável let para Dias e operação
    let Aviso = '';// Tipo de variável let para Aviso e operação

    if (Dias == 0) {
        Aviso = "Insira uma idade igual ou superior a 1 ano";
    } else {
        Aviso = nome + " possui aproximadamente " + Dias + " dias de vida";
    }
    console.log(Dias);// Exibe o objeto guardado na operação
    console.log(Aviso);// Exibe o objeto guardado na operação

    document.getElementById('resultado_idade').innerHTML = Aviso;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa

}


// Criação da função de média da temperatura em dias por IF ELSE
function Class_Amplitude() {

    let Cidade = (document.getElementById('n19').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n19 
    let TempMin = Number(document.getElementById('n20').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n20 e conversão do texto para numerico Number (.value)
    let TempMax = Number(document.getElementById('n21').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n21 e conversão do texto para numerico Number (.value)

    let Media = (TempMax + TempMin) / 2;// Tipo de variável let para Amplitude e operação
    let Aviso = '';// Tipo de variável let para Aviso e operação

    if (Media < -10 || Media > 40) {
        Aviso = "ERRO";
    }
    else if (Media >= -10 && Media <= 10) {
        Aviso = "A temperatura média na cidade de " + Cidade + " é " + Media + " (°C), sendo de Classificação D";
    }
    else if (Media <= 20 && Media > 10) {
        Aviso = "A temperatura média na cidade de " + Cidade + " é " + Media + " (°C), sendo de Classificação C";
    }
    else if (Media <= 30 && Media > 20) {
        Aviso = "A temperatura média na cidade de " + Cidade + " é " + Media + " (°C), sendo de Classificação B";
    }
    else if (Media <= 35 && Media > 30) {
        Aviso = "A temperatura média na cidade de " + Cidade + " é " + Media + " (°C), sendo de Classificação A";
    }
    else {
        Aviso = "A temperatura média na cidade de " + Cidade + " é " + Media + " (°C), sendo de Classificação A+";
    }
    console.log(Media);// Exibe o objeto guardado na operação
    console.log(Aviso);// Exibe o objeto guardado na operação

    document.getElementById('resultado_Media').innerHTML = Aviso;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa

}

// Criação da função de salario por IF ELSE
function Class_Avaliacao() {

    let salario = Number(document.getElementById('n22').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n22 e conversão do texto para numerico Number (.value)
    let prestacao = Number(document.getElementById('n23').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n23 e conversão do texto para numerico Number (.value)

    let Verificacao = (salario * 0.20);// Tipo de variável let para Dias e operação
    let Aviso = '';// Tipo de variável let para Aviso e operação

    if (Verificacao > prestacao) {
        Aviso = "O empréstimo pode ser concedido";
    } else {
        Aviso = "O empréstimo não pode ser concedido devido o valor da prestação ser de " + prestacao + " euros, neste caso, sendo maior que 20% do salário de " + salario + " euros";
    }
    console.log(Verificacao);// Exibe o objeto guardado na operação
    console.log(Aviso);// Exibe o objeto guardado na operação

    document.getElementById('resultado_avaliacao').innerHTML = Aviso;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa

}


// Criação da função DO para Tabuada 
function Class_Tabuada() {

    let numero = Number(document.getElementById('n24').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n24 e conversão do texto para numerico Number (.value)
    let tabuada = 1;// Variável que controla a tabuada (começa em 1)
    let Aviso = "";// Tipo de variável let para Aviso e operação

    do {// Estrutura de repetição que executa enquanto tabuada for menor ou igual a 10
        let i = numero * tabuada;// Multiplica o número base pela posição atual da tabuada
        Aviso += "  " + numero + "x" + tabuada + "=" + i;// Concatena o resultado em forma de texto na variável Aviso
        tabuada++// Incrementa a tabuada para passar para o próximo valor
    } while (tabuada <= 10);

    document.getElementById('resultado_tabuada').innerHTML = Aviso;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}

// Criação da função FOR para Menor de 5 numeros 
function Class_menor_cinco() {
    let campos = document.getElementsByClassName("numero");// Isso retorna uma coleção (tipo lista) de inputs
    let m = Number(campos[0].value);// Este valor será usado como referência inicial (menor valor)

    for (let i = 1; i < campos.length; i++) {// Loop que percorre todos os restantes inputs da classe "numero"

        let n = Number(campos[i].value);// Converte o valor do input atual para número

        if (n < m) {//Compara o valor atual (n) com o menor valor encontrado (m)
            m = n;
        }
    }

    document.getElementById("resultado_menor_cinco").innerHTML = m;

}

// Criação da função FOR para fatorial até 5
function Class_Fatorial_5() {

    let numero = Number(document.getElementById('n30').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão com o ID n30 e conversão do texto para numerico Number (.value)
    let soma = 0;
    let Aviso = "";
    if (numero <= 5) {
        Aviso = "Insira um número superior a 5";
    } else {
        for (let i = numero; i >= 5; i--) {// Loop que percorre todos os restantes inputs da classe "numero"
            soma = soma + i;
            Aviso = "O resultado da operação matemática é: " + soma;
        };
    }

    document.getElementById('resultado_fatorial5').innerHTML = Aviso;// Nome que deve aparecer no ficheiro html para mostrar o resultado na caixa
}


// Criação da função de VM e Classificação da Velocidade por IF ELSE
function Class_TotalKm() {

    let m1 = (document.getElementById('m1').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m2 = (document.getElementById('m2').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m3 = (document.getElementById('m3').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m4 = (document.getElementById('m4').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m5 = (document.getElementById('m5').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m6 = (document.getElementById('m6').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m7 = (document.getElementById('m7').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m8 = (document.getElementById('m8').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m9 = (document.getElementById('m9').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let m10 = (document.getElementById('m10').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)

    let marca1 = (document.getElementById('marca1').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca2 = (document.getElementById('marca2').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca3 = (document.getElementById('marca3').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca4 = (document.getElementById('marca4').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca5 = (document.getElementById('marca5').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca6 = (document.getElementById('marca6').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca7 = (document.getElementById('marca7').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca8 = (document.getElementById('marca8').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca9 = (document.getElementById('marca9').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let marca10 = (document.getElementById('marca10').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)


    let km1 = (document.getElementById('km1').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km2 = (document.getElementById('km2').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km3 = (document.getElementById('km3').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km4 = (document.getElementById('km4').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km5 = (document.getElementById('km5').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km6 = (document.getElementById('km6').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km7 = (document.getElementById('km7').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km8 = (document.getElementById('km8').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km9 = (document.getElementById('km9').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)
    let km10 =(document.getElementById('km10').value);// Tipo de variável pode ser let, var. Neste caso, document faz conexão e conversão do texto para numerico Number (.value)



    let txt = "";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 1</p>";
    txt += "<p>Matricula: "+m1+"</p>";
    txt += "<p>Marca: "+marca1+"</p>";
    txt += "<p>KMS: "+km1+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 2</p>";
    txt += "<p>Matricula: "+m2+"</p>";
    txt += "<p>Marca: "+marca2+"</p>";
    txt += "<p>KMS: "+km2+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 3</p>";
    txt += "<p>Matricula: "+m3+"</p>";
    txt += "<p>Marca: "+marca3+"</p>";
    txt += "<p>KMS: "+km3+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 4</p>";
    txt += "<p>Matricula: "+m4+"</p>";
    txt += "<p>Marca: "+marca4+"</p>";
    txt += "<p>KMS: "+km4+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 5</p>";
    txt += "<p>Matricula: "+m5+"</p>";
    txt += "<p>Marca: "+marca5+"</p>";
    txt += "<p>KMS: "+km5+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 6</p>";
    txt += "<p>Matricula: "+m6+"</p>";
    txt += "<p>Marca: "+marca6+"</p>";
    txt += "<p>KMS: "+km6+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 7</p>";
    txt += "<p>Matricula: "+m7+"</p>";
    txt += "<p>Marca: "+marca7+"</p>";
    txt += "<p>KMS: "+km7+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 8</p>";
    txt += "<p>Matricula: "+m8+"</p>";
    txt += "<p>Marca: "+marca8+"</p>";
    txt += "<p>KMS: "+km8+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 9</p>";
    txt += "<p>Matricula: "+m9+"</p>";
    txt += "<p>Marca: "+marca9+"</p>";
    txt += "<p>KMS: "+km9+"</p>";
    txt += "</div>";

    txt += "<div class='box2'>";
    txt += "<p class='titulo'>VEICULO 10</p>";
    txt += "<p>Matricula: "+m10+"</p>";
    txt += "<p>Marca: "+marca10+"</p>";
    txt += "<p>KMS: "+km10+"</p>";
    txt += "</div>";

    let totalKms = Number(km1) + Number(km2) + Number(km3) + Number(km4) + Number(km5) + Number(km6) + Number(km7) + Number(km8) + Number(km9) + Number(km10);
    txt+= "<p>TOTAL DE KMS: "+totalKms+" Kms</p>";

    document.getElementById('listaVeiculos').innerHTML = txt;
}
 // -------------------------- CRIAÇÃO DE ARRAYS PARA A FUNÇÃO RegistarVeiculosArray -----------------------------------
// Criação de arrays de maneira geral, para poder dar stop no comandos definidos a seguir
let matriculas = []; // Criação de um array global para matriculas (limites não definidos) 
let marcas = []; // Criação de um array global para marcas (limites não definidos) 
let kms = []; // Criação de um array global para kms (limites não definidos) 
// OBS: É necessário criar os Arrays fora da função para não haver conflitos

function RegistarVeiculosArray(){ // Criação da função para registos de veículos dentro de uma estrutura array
// Foi criada uma estrutura if apenas para delimitar o limite de registos dentro do array sendo n=10
    if(matriculas.length < 10){ // .length indica o total de comprimento de registo de informações
        matriculas.push(document.getElementById('matricula').value) // push vai guardar a informação das matriculas inseridas dentro
        // do array global criado na parte de fora da função
        marcas.push(document.getElementById('marca').value)// push vai guardar a informação das marcas inseridas dentro
        // do array global criado na parte de fora da função
        kms.push(document.getElementById('kms').value)// push vai guardar a informação das kms inseridas dentro
        // do array global criado na parte de fora da função

        alert("Registado com sucesso!"); // mensagem de alerta ao se fazer o registo, pode também ser usado let Alerta = "" e depois
        // especificar dentro do if Alerta = "Registado com sucesso". A diferença é que esta mensagem aparece na parte de baixo do botão
        // e o alert vai ser a mensagem a aparecer na página após apertar no botão.
    }else{
        alert("Limite de 10 veiculos atingido"); // Descrição similar ao comando do if
    }   
}

function listarVeiculosArray(){
    
    let txt = ""; // criação de uma variável de texto
    let totalKms = 0; // Atribuição de valor zero a variável totalKms

    for(let i = 0; i < matriculas.length; i++){ // i inicial é de zero até o comprimento das informações de matriculas, i++ (incremento positivo)
        txt += "<div class='box2'>"; // Especifica as customizações pela class relacionadas a variável txt dentro do ambito
        txt += "<p class='titulo'>VEICULO "+(i+1)+"</p>"; // Especifica a customização pela class relacionada ao texto 
        // neste caso existe um incremento i+1, como i inicial é zero, a 1º soma é igual a 1 e consecutivamente 
        txt += "<p>Matricula: "+matriculas[i]+"</p>"; // Adiciona a 1º informação da matricula no array 0 e sucessivamente 
        txt += "<p>Marca: "+marcas[i]+"</p>";// Adiciona a 1º informação da marcas no array 0 e sucessivamente
        txt += "<p>KMS: "+kms[i]+"</p>";// Adiciona a 1º informação da kms no array 0 e sucessivamente
        txt += "</div>";

        totalKms += Number(kms[i]); // ADICIONAR COMENTARIO
    }

    txt+= "<p>TOTAL DE KMS: "+totalKms+" Kms</p>";

    document.getElementById('listaVeiculosARRAY').innerHTML = txt;
}