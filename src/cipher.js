const cipher = {
  encode: function (offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('Os argumentos devem ser uma string e um número');
    } else {
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
    }
  },
  decode: function (offset, string) {
    if (typeof offset !== 'number' || typeof string !== 'string') {
      throw new TypeError('Os argumentos devem ser uma string e um número');
    } else {
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
  }
};


export default cipher;