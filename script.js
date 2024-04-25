function calcularParcelas() {
    var valorTotal = parseFloat(document.getElementById('valorTotal').value);
    var tabela = document.getElementById('tabelaParcelamento').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela

    for (var i = 1; i <= 10; i++) {
        var valorParcela, montante;

        if (i >= 4) {
            // Aplica juros de 3% ao valor total desde a primeira parcela para 4 ou mais parcelas
            var taxaJuros = 0.03; // 3% de juros
            montante = valorTotal * Math.pow(1 + taxaJuros, i);
        } else {
            // Sem juros até a 3ª parcela
            montante = valorTotal;
        }

        valorParcela = montante / i;

        // Insere a linha na tabela
        var novaLinha = tabela.insertRow();
        var celulaParcela = novaLinha.insertCell(0);
        var celulaValorParcela = novaLinha.insertCell(1);
        var celulaValorTotal = novaLinha.insertCell(2);

        celulaParcela.innerHTML = i + 'x';
        celulaValorParcela.innerHTML = 'R$' + ' ' + valorParcela.toFixed(2).replace('.',',');
        celulaValorTotal.innerHTML = 'R$' + ' ' + montante.toFixed(2).replace('.',',');
    }
}
