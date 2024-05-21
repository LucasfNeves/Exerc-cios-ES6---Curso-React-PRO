// 1. Guarde em uma variável se algum valor da lista é par e logue-as no console.

const numeros = [1, 2, 3, 4, 5, 6] 

const par = numeros.some((item) => {
  return item % 2 === 0
})

console.log(par)

// 2. Guarde em uma variável se alguma pessoa é maior que 18 anos e log

const pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 17 },
  { nome: 'Pedro', idade: 30 },
  { nome: 'Ana', idade: 15 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Julia', idade: 19 },
  { nome: 'Lucas', idade: 22 },
  { nome: 'Beatriz', idade: 28 },
  { nome: 'Fernanda', idade: 12 }
]

const maioresDeIdade = pessoas.some((item) => {
  return item.idade >= 18
})

console.log(maioresDeIdade)

// 3. Guarda em uma variável se todos os valores da lista são maiores que 10 e logue-as no console.

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const eMaiorQue10 = numeros2.every((item) => {
  return item > 10
})

console.log(eMaiorQue10)