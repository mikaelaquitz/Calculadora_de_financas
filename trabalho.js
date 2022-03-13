function gastos() {
    /*---------------------------------------------Cabeçalho------------------------------------------ */
    criarElementos('header', ['id', 'cabecalho'], '', 'body');
    /*---------------------------------------------Cabeçalho------------------------------------------ */

    /*---------------------------------------------receita------------------------------------------ */
    /*temp = document.createElement('div');
    temp.setAttribute('id','receita');
    document.querySelector('body').appendChild(temp);*/

    criarElementos('div', ['id', 'receita'], '', 'body');

    /*temp = document.createElement('h2');
    temp.innerText='Receitas';
    temp.setAttribute('id','h1');
    document.querySelector('#receita').appendChild(temp);*/

    criarElementos('h2', ['id', 'h1'], 'Receitas', '#receita');

    /*temp = document.createElement('section');
    temp.setAttribute('id','sectionR');
    document.querySelector('#receita').appendChild(temp);*/

    criarElementos('section', ['id', 'sectionR'], '', '#receita');

    criarElementos('label', ['id', 'labelR'], 'Salário', '#sectionR');
    criarElementos('input', ['id', 'vSalario', 'type', 'number', 'placeholder', 'R$ 0,00', 'onchange', 'calcSaldo()'], '', '#sectionR');

    criarElementos('label', ['id', 'labelR'], 'Extra', '#sectionR');
    criarElementos('input', ['id', 'vExtra', 'type', 'number', 'placeholder', 'R$ 0,00', 'onchange', 'calcSaldo()'], '', '#sectionR');

    criarElementos('label', ['id', 'labelR'], 'Total', '#sectionR');
    criarElementos('input', ['id', '#totalreceita', 'type', 'text', 'placeholder', 'R$ 0,00'], '', '#sectionR');

    /*---------------------------------------------receita------------------------------------------ */


    /*---------------------------------------------despesas------------------------------------------ */

    criarElementos('div', ['id', 'despesa'], '', 'body');

    /* Entrada de despesas de moradia*/
    criarElementos('div', ['id', 'moradia'], '', '#despesa');

    criarElementos('section', ['id', 'tituloMoradia'], '', '#moradia');
    criarElementos('img', ['src', 'img/moradia.png', 'alt', 'Icone Moradia'], '', '#tituloMoradia');
    criarElementos('h1', ['class', 'titulo'], 'Moradia', '#tituloMoradia');

    criarElementos('section', ['class', 'inputM'], '', '#moradia');
    criarElementos('label', [], 'Gasto total', '.inputM');
    criarElementos('input', ['id', 'vMoradia', 'type', 'number', 'placeholder', 'R$ 0,00', 'value', '0,00', 'onchange', 'calcSaldo()'], '', '.inputM');
    /* Entrada de despesas de moradia*/

    /* Entrada de despesas de alimentação*/
    criarElementos('div', ['id', 'alimentacao'], '', '#despesa');

    criarElementos('section', ['id', 'tituloAlimentacao'], '', '#alimentacao');
    criarElementos('img', ['src', 'img/alimentacao.png', 'alt', 'Icone Alimentação'], '', '#tituloAlimentacao');
    criarElementos('h1', ['class', 'titulo'], 'Alimentação', '#tituloAlimentacao');

    criarElementos('section', ['class', 'inputA'], '', '#alimentacao');
    criarElementos('label', [], 'Gasto total', '.inputA');
    criarElementos('input', ['id', 'vAlimentacao', 'type', 'number', 'placeholder', 'R$ 0,00', 'value', '0,00', 'onchange', 'calcSaldo()'], '', '.inputA');
    /* Entrada de despesas de alimentação*/

    /* Entrada de despesas de Saúde*/
    criarElementos('div', ['id', 'saude'], '', '#despesa');

    criarElementos('section', ['id', 'tituloSaude'], '', '#saude');
    criarElementos('img', ['src', 'img/saude.png', 'alt', 'Icone Saúde'], '', '#tituloSaude');
    criarElementos('h1', ['class', 'titulo'], 'Saúde', '#tituloSaude');

    criarElementos('section', ['class', 'inputS'], '', '#saude');
    criarElementos('label', [], 'Gasto total', '.inputS');
    criarElementos('input', ['id', 'vSaude', 'type', 'number', 'placeholder', 'R$ 0,00', 'value', '0,00', 'onchange', 'calcSaldo()'], '', '.inputS');
    /* Entrada de despesas de Saúde*/

    /* Entrada de despesas de Transporte*/
    criarElementos('div', ['id', 'transporte'], '', '#despesa');

    criarElementos('section', ['id', 'tituloTransporte'], '', '#transporte');
    criarElementos('img', ['src', 'img/transporte.png', 'alt', 'Icone Alimentação'], '', '#tituloTransporte');
    criarElementos('h1', ['class', 'titulo'], 'Transporte', '#tituloTransporte');

    criarElementos('section', ['class', 'inputT'], '', '#transporte');
    criarElementos('label', [], 'Gasto total', '.inputT');
    criarElementos('input', ['id', 'vTransporte', 'type', 'number', 'placeholder', 'R$ 0,00', 'value', '0,00', 'onchange', 'calcSaldo()'], '', '.inputT');
    /* Entrada de despesas de Transporte*/

    /* Entrada de despesas de Educação*/
    criarElementos('div', ['id', 'educacao'], '', '#despesa');

    criarElementos('section', ['id', 'tituloEducacao'], '', '#educacao');
    criarElementos('img', ['src', 'img/educacao.png', 'alt', 'Icone Educação'], '', '#tituloEducacao');
    criarElementos('h1', ['class', 'titulo'], 'Educação', '#tituloEducacao');

    criarElementos('section', ['class', 'inputE'], '', '#educacao');
    criarElementos('label', [], 'Gasto total', '.inputE');
    criarElementos('input', ['id', 'vEducacao', 'type', 'number', 'placeholder', 'R$ 0,00', 'value', '0,00', 'onchange', 'calcSaldo()'], '', '.inputE');
    /* Entrada de despesas de Educação*/
    /*---------------------------------------------despesas------------------------------------------ */


    /*---------------------------------------------resumo------------------------------------------ */

    criarElementos('div', ['id', 'resumo'], '', 'body');

    criarElementos('section', ['id', 'tituloResumo'], '', '#resumo');
    criarElementos('img', ['src', 'img/resumo.png', 'alt', 'Icone Calculadora'], '', '#tituloResumo');
    criarElementos('h1', ['class', 'titulo'], 'Resumo', '#tituloResumo');

    /*criarElementos('section', ['id', 'MoradiaResumo'], '', '#resumo');*/
    criarElementos('h2', ['id', 'Rmoradia'], 'Moradia', '#resumo');
    criarElementos('p', ['id', 'Pmoradia'], '0%', '#resumo');
    criarElementos('p', ['id', 'Vmoradia'], 'R$ 0,00', '#resumo');

    /*criarElementos('section', ['id', 'AlimentacaoResumo'], '', '#resumo');*/
    criarElementos('h2', ['id', 'Ralimentacao'], 'Alimentação', '#resumo');
    criarElementos('p', ['id', 'Palimentacao'], '0%', '#resumo');
    criarElementos('p', ['id', 'Valimentacao'], 'R$ 0,00', '#resumo');

    /* criarElementos('section', ['id', 'SaudeResumo'], '', '#resumo');*/
    criarElementos('h2', ['id', 'Rsaude'], 'Saúde', '#resumo');
    criarElementos('p', ['id', 'Psaude'], '0%', '#resumo');
    criarElementos('p', ['id', 'Vsaude'], 'R$ 0,00', '#resumo');

    /*criarElementos('section', ['id', 'TransporteResumo'], '', '#resumo');*/
    criarElementos('h2', ['id', 'Rtransporte'], 'Transporte', '#resumo');
    criarElementos('p', ['id', 'Ptransporte'], '0%', '#resumo');
    criarElementos('p', ['id', 'Vtransporte'], 'R$ 0,00', '#resumo');

    /*criarElementos('section', ['id', 'EducacaoResumo'], '', '#resumo');*/
    criarElementos('h2', ['id', 'Reducacao'], 'Educação', '#resumo');
    criarElementos('p', ['id', 'Peducacao'], '0%', '#resumo');
    criarElementos('p', ['id', 'Veducacao'], 'R$ 0,00', '#resumo');

    criarElementos('section', ['id', 'saldo'], '', '#resumo');
    criarElementos('p', ['id', 'textosaldo'], 'Saldo', '#saldo');
    criarElementos('p', ['id', 'Vsaldo'], 'R$ 0,00', '#saldo');
    criarElementos('p', ['id', 'Msaldo'], 'Parabéns, você conseguiu ficar no positivo! hora de pensar em investir', '#saldo');

    /*---------------------------------------------resumo------------------------------------------ */


}

function criarElementos(tag, atributos, texto, elementoPai) {
    let el = document.createElement(tag);
    for (let i = 0; i < atributos.length; i++) {
        el.setAttribute(atributos[i], atributos[++i]);
    }
    if (texto)
        el.innerHTML = texto;
    document.querySelector(elementoPai).appendChild(el);
}

function calcSaldo() {
    let receitas = ['#vSalario', '#vExtra'];
    let despesas = ['#vMoradia', '#vAlimentacao', '#vSaude', '#vTransporte', '#vEducacao'];
    let totalReceita = 0.0;
    let totalDespesas = 0.0;


    for (let i = 0; i < receitas.length; i++) {

        if (document.querySelector(receitas[i]).value != '') {
            totalReceita += parseFloat(document.querySelector(receitas[i]).value);
        }
        document.getElementById('#totalreceita').setAttribute('value', 'R$' + totalReceita.toFixed(2));//mudar campo total receita
    }

    for (let i = 0; i < despesas.length; i++) {

        if (document.querySelector(despesas[i]).value != '') {
            let aux = parseFloat(document.querySelector(despesas[i]).value);
            totalDespesas += aux;
        }

    }

    if (totalDespesas > 0)
        calcPorcetangem(totalDespesas);

    let saldo = (totalReceita - totalDespesas).toFixed(2);
    document.querySelector("#Vsaldo").innerHTML = "R$" + saldo;//Muda valor de saldo

    if (saldo < 0) {
        document.getElementById('Msaldo').innerHTML = "Saldo negativo! Reveja seu orçamento e tente aumentar receitas ou diminuir despesas";
        document.getElementById('saldo').setAttribute('id', 'saldonegativo');
    }
    else {
        document.getElementById('Msaldo').innerHTML = "Parabéns, você conseguiu ficar no positivo! hora de pensar em investir";
        document.getElementById('saldonegativo').setAttribute('id', 'saldo');
    }

}

function calcPorcetangem(number) {
    let despesas = ['#vMoradia', '#vAlimentacao', '#vSaude', '#vTransporte', '#vEducacao'];
    let valResumo = ['#Vmoradia', '#Valimentacao', '#Vsaude', '#Vtransporte', '#Veducacao'];
    let porcentagemResumo = ['#Pmoradia', '#Palimentacao', '#Psaude', '#Ptransporte', '#Peducacao'];

    for (let i = 0; i < despesas.length; i++) {
        let aux = document.querySelector(despesas[i]).value;
        if (aux == '0' || aux == '') {
            document.querySelector(porcentagemResumo[i]).innerHTML = "0%";
            document.querySelector(valResumo[i]).innerHTML = "R$0,00";
        }

        else {

            document.querySelector(valResumo[i]).innerHTML = "R$ " + aux;
            document.querySelector(porcentagemResumo[i]).innerHTML = ((aux * 100) / number).toFixed(0) + "%";
        }

    }

}

