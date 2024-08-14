// função para puxar os valores adicionados
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value); //quantidade vem do id do código HTML
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    // Adiciona a proteção aqui
    if (de > ate) {
        alert("O valor 'Do número' deve ser menor ou igual ao valor 'Até o número'. Por favor, revise os valores inseridos.");
        return; // Impede a execução do restante da função se os valores estiverem incorretos
    }
    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }

//listar números
    let sorteados = []; //lista array
    let numero;
    

//sortear números aleatórios
    for (let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
//não repetir número aleatório na lista
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito')
            return;
        }

        sorteados.push(numero);
    }
//adicionar os números sorteados na label
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    alterarStatusBotao();
}
//ter numeros aleatório em casa decimal
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min +  1)) + min;
}
//ativar borão reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}
//limpar campo e alterar botão
function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = ' <label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao(); //chamando a função
}