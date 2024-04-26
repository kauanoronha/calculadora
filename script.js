document.addEventListener("DOMContentLoaded", function() {
    // Adiciona o evento ao campo de entrada para submeter ao pressionar Enter
    document.getElementById('valorTotal').addEventListener('keydown', submitOnEnter);
});

function calcularParcelas() {
    var valorTotal = parseFloat(document.getElementById('valorTotal').value);
    var tabela = document.getElementById('tabelaParcelamento').getElementsByTagName('tbody')[0];
    tabela.innerHTML = ''; // Limpa a tabela antes de adicionar novas linhas

    for (var i = 1; i <= 10; i++) {
        var valorParcela, montante;

        // Aplica juros compostos a partir da 4ª parcela
        if (i >= 4) {
            var taxaJuros = 0.03; // 3% de juros
            montante = valorTotal * Math.pow(1 + taxaJuros, i);
        } else {
            montante = valorTotal; // Sem juros até a 3ª parcela
        }

        valorParcela = montante / i;
        valorparcelacheia = valorTotal / i;

        // Condição para o valor mínimo da parcela (R$ 20,00)
        if (i > 1 && valorparcelacheia < 20) {
            continue; // Pula para a próxima iteração do loop, não adicionando esta linha
        }

        // Formatação dos valores monetários para o formato brasileiro
        var valorParcelaFormatado = 'R$ ' + valorParcela.toFixed(2).replace('.', ',');
        var montanteFormatado = 'R$ ' + (valorParcela * i).toFixed(2).replace('.', ',');

        // Insere a linha na tabela
        var novaLinha = tabela.insertRow();
        var celulaParcela = novaLinha.insertCell(0);
        var celulaValorParcela = novaLinha.insertCell(1);
        var celulaValorTotal = novaLinha.insertCell(2);

        celulaParcela.innerHTML = i + 'x';
        celulaValorParcela.innerHTML = valorParcelaFormatado;
        celulaValorTotal.innerHTML = montanteFormatado;
    }
}

function submitOnEnter(event) {
    // Verifica se a tecla pressionada é 'Enter'
    if (event.key === "Enter") {
        // Impede a ação padrão do 'Enter', que é submeter o formulário
        event.preventDefault();
        // Chama a função de calcular as parcelas
        calcularParcelas();
    }
}
