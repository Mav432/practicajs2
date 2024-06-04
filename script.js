function calcular(operador) {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);

    if(isNaN(valor1) || isNaN(valor2))
        {
            document.getElementById('resultado').textContent = 'Ingresa valores numericos validos.'
            return;
        }

    let resultado;

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            resultado = 'Operador no válido';
    }

    document.getElementById('resultado').textContent = 'Resultado = ' + resultado;
}