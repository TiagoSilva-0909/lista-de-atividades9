
const respostaAPI = `{
    "tarefas": [
      { "descricao": "Estudar JS", "concluida": true },
      { "descricao": "Ler livro", "concluida": false },
      { "descricao": "Praticar exercícios", "concluida": true }
    ]
  }`;
  
  // Parseando o JSON para um objeto JavaScript
  const dados = JSON.parse(respostaAPI);
  
  // Função para imprimir as tarefas concluídas
  function imprimirTarefasConcluidas() {
    // Filtrando as tarefas concluídas
    const tarefasConcluidas = dados.tarefas.filter(tarefa => tarefa.concluida);
    
    // Imprimindo no console as tarefas concluídas
    tarefasConcluidas.forEach(tarefa => {
      console.log(tarefa.descricao);
    });
  }
  
  // Chamando a função para imprimir as tarefas concluídas
  imprimirTarefasConcluidas();









