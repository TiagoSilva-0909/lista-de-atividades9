
function mostrarDataEHora() {
    const agora = new Date();
    
    // Obtendo os componentes da data
    const dia = String(agora.getDate()).padStart(2, '0');
    const mes = String(agora.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const ano = agora.getFullYear();
    
    // Obtendo os componentes da hora
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    
    // Formando a string no formato desejado
    const dataEHora = `Hoje é ${dia}/${mes}/${ano} e agora são ${horas}:${minutos}:${segundos}`;
    
    console.log(dataEHora);
  }
  
  // Chama a função para testar
  mostrarDataEHora();




















