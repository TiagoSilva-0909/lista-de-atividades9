
function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
  }
  
  // Função que exibe a hora atual no console
  function displayTime() {
    const now = new Date();
    const hours = formatTime(now.getHours());
    const minutes = formatTime(now.getMinutes());
    const seconds = formatTime(now.getSeconds());
  
    console.clear(); // Limpa o console para dar o efeito de "relógio"
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  // Chama a função displayTime a cada segundo (1000ms)
  setInterval(displayTime, 1000);


















