function calcularParcelas() {
    var valorTotal = document.getElementById('valorTotal').value;
    var tabela = document.getElementById('tabelaParcelamento').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela

    for (var i = 1; i <= 10; i++) {
        var valorParcela;
        if (i < 4) {
            // Sem juros até a 3ª parcela
            valorParcela = valorTotal / i;
        } else {
            // Aplica juros de 3% ao valor total a partir da 4ª parcela
            var taxaJuros = 0.03; // 3% de juros
            var montante = valorTotal * Math.pow(1 + taxaJuros, i - 3);
            valorParcela = montante / i;
        }

        // Insere a linha na tabela
        var novaLinha = tabela.insertRow();
        var celulaParcela = novaLinha.insertCell(0);
        var celulaValorParcela = novaLinha.insertCell(1);
        var celulaValorTotal = novaLinha.insertCell(2);

        celulaParcela.innerHTML = i + 'x';
        celulaValorParcela.innerHTML = valorParcela.toFixed(2);
        celulaValorTotal.innerHTML = (valorParcela * i).toFixed(2);
    }
}
