const http = require('http');

const produtos = [
  {
    id: 1,
    nome: 'Notebook Dell',
    descricao: 'Notebook para uso administrativo',
    preco: 3500,
    codigoBarras: '7891234567890',
    categoria: 'Eletrônicos',
    quantidadeEstoque: 10
  },
  {
    id: 2,
    nome: 'Mouse Logitech',
    descricao: 'Mouse sem fio para escritório',
    preco: 120,
    codigoBarras: '7899876543210',
    categoria: 'Periféricos',
    quantidadeEstoque: 25
  }
];

const fornecedores = [
  {
    id: 1,
    nome: 'Fornecedor Tecnologia LTDA',
    cnpj: '12.345.678/0001-90',
    endereco: 'Rua Exemplo, 100',
    contato: 'contato@fornecedor.com'
  }
];

const associacoes = [
  {
    id: 1,
    produtoId: 1,
    fornecedorId: 1
  }
];

const categorias = [
  {
    id: 1,
    nome: 'Eletrônicos',
    descricao: 'Produtos eletrônicos utilizados no ambiente administrativo'
  },
  {
    id: 2,
    nome: 'Periféricos',
    descricao: 'Equipamentos acessórios de informática'
  }
];

const gerarRelatorioEstoque = () => {
  const totalProdutos = produtos.length;
  const quantidadeTotalEstoque = produtos.reduce(
    (total, produto) => total + produto.quantidadeEstoque,
    0
  );

  const valorTotalEstoque = produtos.reduce(
    (total, produto) => total + produto.preco * produto.quantidadeEstoque,
    0
  );

  return {
    totalProdutos,
    quantidadeTotalEstoque,
    valorTotalEstoque,
    produtos
  };
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');

  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({
      mensagem: 'API do Projeto Integrador funcionando!'
    }));
    return;
  }

  if (req.method === 'GET' && req.url === '/produtos') {
    res.writeHead(200);
    res.end(JSON.stringify(produtos));
    return;
  }

  if (req.method === 'GET' && req.url === '/fornecedores') {
    res.writeHead(200);
    res.end(JSON.stringify(fornecedores));
    return;
  }

  if (req.method === 'GET' && req.url === '/associacoes') {
    res.writeHead(200);
    res.end(JSON.stringify(associacoes));
    return;
  }

  if (req.method === 'GET' && req.url === '/categorias') {
    res.writeHead(200);
    res.end(JSON.stringify(categorias));
    return;
  }

  if (req.method === 'GET' && req.url === '/relatorio-estoque') {
    res.writeHead(200);
    res.end(JSON.stringify(gerarRelatorioEstoque()));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    erro: 'Rota não encontrada'
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});