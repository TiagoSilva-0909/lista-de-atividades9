
function contarVogais(str) {
    // Normaliza a string para remover acentos (ex: "á" vira "a")
    const normalizada = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
    // Expressão regular para encontrar todas as vogais
    const vogais = normalizada.match(/[aeiou]/gi);
  
    // Retorna a quantidade ou 0 se não houver vogais
    return vogais ? vogais.length : 0;
  }

  console.log(contarVogais("Olá, mundo!"));       
console.log(contarVogais("Àrvore"));            
console.log(contarVogais("12345"));             
console.log(contarVogais("É isso aí!"));       























