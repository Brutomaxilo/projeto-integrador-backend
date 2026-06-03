const http = require('http');

const produtos = [
  {
    id: 1,
    nome: 'Notebook Dell',
    descricao: 'Notebook para uso administrativo',
    preco: 3500,
    codigoBarras: '7891234567890'
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

  res.writeHead(404);
  res.end(JSON.stringify({
    erro: 'Rota não encontrada'
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});