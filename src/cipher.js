const cipher = {
  encode: function (string, offset) {
    let newText = "";
    let num;
    for (let i = 0; i < string.length; i++) {
      num = string.charCodeAt([i]);
      if (num >= 65 && num <= 90) {
        num = ((num - 65 + offset) % 26) + 65;
        newText = newText.concat(String.fromCharCode(num));
      }
      else if (num >= 97 && num <= 122) {
        num = ((num - 97 + offset) % 26) + 97;
        newText = newText.concat(String.fromCharCode(num));
      }
      else {
        newText = newText.concat(String.fromCharCode(num));
      }
    }
    return newText;
  },
  decode: function (string, offset) {
    let newText = "";
    let num;
    for (let i = 0; i < string.length; i++) {
      num = string.charCodeAt([i]);
      if (num >= 65 && num <= 90) {
        num = ((num - 90 - offset) % 26) + 90;
        newText = newText.concat(String.fromCharCode(num));
      }
      else if (num >= 97 && num <= 122) {
        num = ((num - 122 - offset) % 26) + 122;
        newText = newText.concat(String.fromCharCode(num));
      }
      else {
        newText = newText.concat(String.fromCharCode(num));
      }
    }
    return newText;
  }
};

export default cipher;


//alert("test");

// document.getElementById("cifrar").addEventListener("click", encode);
// document.getElementById("decifrar").addEventListener("click", decode);
// document.getElementById("limpar").addEventListener("click", limpar);


// function encode() {
//   const string = document.getElementById("texto").value;
//   const offset = parseInt(document.getElementById("offset").value);
//   const result = cifrar(string, offset);

//   document.getElementById("result").innerHTML =
//     ("<h3 id='titulo2'>Mensagem cifrada:</h3>" +
//       "<textarea rows=5 cols=70>" + result + "</textarea><br>");
// }



//procurando como ligar a função do encode e decode com a logica do cifrar e decifrar
//https://pt.stackoverflow.com/questions/26347/chamar-função-js-em-outro-arquivo-dependência-entre-scripts-javascript
// window.cifrar = function (string, offset){
//   let newText = "";
//   let num;
//   for (let i = 0; i < string.length; i++) {
//     num = string.charCodeAt([i]);
//     if (num >= 65 && num <= 90) {
//       num = ((num - 65 + offset) % 26) + 65;
//       newText = newText.concat(String.fromCharCode(num));
//     }
//     else if (num >= 97 && num <= 122) {
//       num = ((num - 97 + offset) % 26) + 97;
//       newText = newText.concat(String.fromCharCode(num));
//     }
//     else {
//       newText = newText.concat(String.fromCharCode(num));
//     }
//   }
//   return newText;
// }

//#####################//

//procurando como ligar a função do encode e decode com a logica do cifrar e decifrar
//https://pt.stackoverflow.com/questions/26347/chamar-função-js-em-outro-arquivo-dependência-entre-scripts-javascript
// window.decifrar = function (string, offset){
//   let newText = "";
//   let num;
//   for (let i = 0; i < string.length; i++) {
//     num = string.charCodeAt([i]);
//     if (num >= 65 && num <= 90) {
//       num = ((num - 90 - offset) % 26) + 90;
//       newText = newText.concat(String.fromCharCode(num));
//     }
//     else if (num >= 97 && num <= 122) {
//       num = ((num - 122 - offset) % 26) + 122;
//       newText = newText.concat(String.fromCharCode(num));
//     }
//     else {
//       newText = newText.concat(String.fromCharCode(num));
//     }
//   }
//   return newText;
// }

// function decode() {
//   const string = document.getElementById("texto").value;
//   const offset = parseInt(document.getElementById("offset").value);
//   const result = decifrar(string, offset);

//   document.getElementById("result").innerHTML =
//     ("<h3 id='titulo2'>Mensagem decifrada:</h3>" +
//       "<textarea rows=5 cols=70>" + result + "</textarea><br>");
// }

// function limpar() {
//   location.reload();
// }