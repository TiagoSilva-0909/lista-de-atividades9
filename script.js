let aluno = {
    nome: "Tiago Silva",
    idade: 20,
    curso: "programador",
    notas: [8.5, 7.0, 9.0, 6.5]
  };
  
  // Função para calcular a média das notas
  function calcularMedia(aluno) {
    let soma = aluno.notas.reduce((total, nota) => total + nota, 0);
    let media = soma / aluno.notas.length;
    aluno.media = media;
  }
  
  // Chamando a função para calcular e adicionar a média
  calcularMedia(aluno);
  
  // Exibindo o objeto atualizado
  console.log(aluno);




