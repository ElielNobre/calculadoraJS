function calcular(opera) {
    var val1 = document.formcalc.val1.value;
    var val2 = document.formcalc.val2.value;
    if (opera == "somar") {
        var res = parseInt(val1) + parseInt(val2);
    } else {
        if (opera == "subtrair") {
            var res = val1 - val2;
        } else {
            if (opera == "multiplicar") {
                var res = val1 * val2;
            } else {
                var res = val1 / val2;
            }
        }
    }
    document.formcalc.res.value = res;
}

function calcNum(num) {
    if (typeof gvisor == 'undefined') {
        document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
}

// Função que limpa a calculadora e todas as variáveis existentes.
function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
}

// Função que executa as operações básicas da calculadora
function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
        var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (oper == "subtrair") {
            var valor = valor1 - valor2;
        } else {
            if (oper == "multiplicar") {
                var valor = valor1 * valor2;
            } else {
                var valor = valor1 / valor2;
            }
        }
    }

    return (valor);
}

// Função do algoritmo de "passagem" das ações do usuário
function calcParse(oper) {
    var valor = document.calcform.visor.value;
    delete gvisor;

    if (typeof goper != 'undefined' && oper == 'resultado') {
        gvalor = calcOper(goper, gvalor, valor);
        document.calcform.visor.value = gvalor;
        delete oper;
        delete gvalor;
        return (0);
    }

    if (typeof gvalor != 'undefined') {
        gvalor = calcOper(goper, gvalor, valor);
        goper = oper;
        document.calcform.visor.value = gvalor;
    } else {
        gvalor = valor;
        goper = oper;
    }

}