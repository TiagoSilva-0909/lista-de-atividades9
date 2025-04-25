const produtos = [
    { nome: "Camisa Polo", preco: 79.90, categoria: "Roupas" },
    { nome: "Calça Jeans", preco: 129.90, categoria: "Roupas" },
    { nome: "Notebook Dell", preco: 3599.00, categoria: "Eletrônicos" },
    { nome: "Fone de Ouvido", preco: 199.90, categoria: "Eletrônicos" },
    { nome: "Livro de JavaScript", preco: 49.90, categoria: "Livros" },
    { nome: "Tênis Esportivo", preco: 229.90, categoria: "Calçados" }
  ];

  function filtrarPorCategoria(produtos, categoriaDesejada) {
    return produtos.filter(produto => produto.categoria === categoriaDesejada);
  }


  const eletronicos = filtrarPorCategoria(produtos, "Eletrônicos");
  console.log(eletronicos);

























