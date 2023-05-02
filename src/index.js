import cipher from './cipher.js';


const btnEncode = document.getElementById("cifrar");
btnEncode.addEventListener("click", encode);

const btnDencode = document.getElementById("decifrar");
btnDencode.addEventListener("click", decode);

const btnLimpar = document.getElementById("limpar");
btnLimpar.addEventListener("click", limpar);

function encode() {
  const string = document.getElementById("textEncode").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.encode(offset, string);

  document.getElementById("result").innerHTML =
    ("<h3 id='titulo2'>Mensagem cifrada:</h3>" +
        "<textarea rows=5 cols=70>" + result + "</textarea><br>");
}

function decode () {
  const string = document.getElementById("textEncode").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cipher.decode(offset, string);

  
  document.getElementById("result").innerHTML =
        ("<h3 id='titulo2'>Mensagem decifrada:</h3>" +
            "<textarea rows=5 cols=70>" + result + "</textarea><br>");
}

function limpar() {
  location.reload();
  
}

