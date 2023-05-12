# Cifra de César
***
## 1. Perguntas do Projeto Cipher
Quem são os principais usuários do produto?
###### Qualquer pessoa que queira ter um resultado seguro.
Quais são os objetivos desses usuários em relação ao seu produto?
###### Os objetivos do usúario são, ter segurança ao criptografar e descriptografar as mensagens recebidas e enviadas, basta colocar um número de deslocamento.
Como você acha que o produto que você está criando está resolvendo seus problemas?
###### 

## 2. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 3. Projeto Desenvolvido

Consiste em uma aplicação que irá criptar uma mensagem e descritar, para o usuário, utilizando um deslocamento (offset) definido por ele.

- Modo de uso:
    * O usuário digita uma mensagem na caixa "Digite uma mensagem", escolherá um valor do deslocamento (valor padrão será 5) e clicará no botão Cifrar, na caixa "Mensagem cifrada/decifrada" ele copiará o conteúdo da mensagem cifrada e enviará a mensagem cifrada, junto com o valor do (offset) para que o outro usuário consiga decriptografar a mensagem.

    * Na caixa "Digite a mensagem" o usuário que recebeu a mensagem criptografada irá colar o valor da mensagem e colocará também o valor do deslocamento (offset) e clicará no botão Decifrar. O valor original da mensagem aparecerá na caixa "Mensagem cifrada/decifrada".

## 4. Para considerar o feedback do projeto

Em resumo, os critérios mínimos de aceitação do projeto para considerar o
Project Feedback:

* [x] Possui uma interface que permite ao usuário criptografar e
  descriptografar.
* [x] O projeto será entregue incluindo testes unitários dos métodos `cipher`
  (`encode` e `decode`).
* [x] O projeto será entregue livre de _erros_ de `eslint` (_warnings_ são ok).
* [x] O código do seu projeto será entregue no GitHub.
* [x] A interface será "implantada" usando o GitHub Pages.
* [x] O README contém uma definição de produto.

## Protótipo
![alt text](src/img/prototipoCipher.png) 

## 5. Link do GitPages
* https://narabranco.github.io/SAP010-cipher/