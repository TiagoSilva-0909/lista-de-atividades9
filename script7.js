
function contagemRegressiva() {
    let segundos = 5;
  
    // Função que irá exibir a contagem regressiva no console
    const intervalo = setInterval(() => {
      console.log(segundos); // Exibe o tempo restante
      segundos--;
  
      // Quando o tempo acabar, cancela o intervalo e exibe a mensagem
      if (segundos < 0) {
        clearInterval(intervalo);
        setTimeout(() => {
          console.log("Tempo esgotado!"); // Exibe a mensagem final
        }, 1000); // Exibe a mensagem 1 segundo após o término da contagem
      }
    }, 1000); // Intervalo de 1 segundo entre as atualizações
  }
  
  // Chama a função para iniciar a contagem regressiva
  contagemRegressiva();

