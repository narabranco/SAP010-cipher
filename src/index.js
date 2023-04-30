import cipher from './cipher.js';

//codigo duplicado, neste arquivo não funciona
document.getElementById("cifrar").addEventListener("click", encode);
document.getElementById("decifrar").addEventListener("click", decode);
document.getElementById("limpar").addEventListener("click", limpar);

function encode() {
  const string = document.getElementById("root").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.encode(string, offset);

  document.getElementById("result").innerHTML =
    ("<h3 id='titulo2'>Mensagem cifrada:</h3>" +
        "<textarea rows=5 cols=70>" + result + "</textarea><br>");
}

function decode () {
  const string = document.getElementById("root").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.decode(string, offset);

  document.getElementById("result").innerHTML =
        ("<h3 id='titulo2'>Mensagem decifrada:</h3>" +
            "<textarea rows=5 cols=70>" + result + "</textarea><br>");
}

function limpar() {
  location.reload();
}

