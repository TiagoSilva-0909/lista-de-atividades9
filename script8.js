
let usuario = {
    nome: "Tiago Silva",
    email: "Tiago.silva@email.com",
    idade: 28
  };
  
  // 2. Convertendo o objeto para JSON
  let usuarioJson = JSON.stringify(usuario);
  console.log("Objeto convertido para JSON:");
  console.log(usuarioJson);
  
  // 3. Reconvertendo o JSON para objeto JavaScript
  let usuarioObjeto = JSON.parse(usuarioJson);
  console.log("\nJSON reconvertido para objeto:");
  console.log(usuarioObjeto);

