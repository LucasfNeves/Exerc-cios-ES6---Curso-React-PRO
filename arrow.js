// 1. Converta as funções abaixo para Arrow Functions.

function somar(a, b) {
    return a + b;
  };
  
  const somarArrow = (a, b) => a + b;
  
  console.log(somarArrow(2, 2))
  
  function verificarNegativo(numero) {
    return numero < 0;
  };
  
  const verificarNegativoArrow = (numero) => numero < 0;
  
  function criarUsuario(nome, idade) {
    return {
      nome,
      idade,
    }
  };
  
  const criarUsuarioArrow = (nome, idade) => {
    return {
      nome,
      idade,
    }
  }
  
  setTimeout(function() {
    console.log('Hello world!')
  }, 1000)
  
  setTimeout(() => console.log('Hello world!'), 1000)