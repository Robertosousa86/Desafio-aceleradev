function decifrar(cifrado, numero_casas) {

    for (letra of cifrado.toLowerCase()) {
        let charcode = letra.charCodeAt();

        if (charcode >= 97 && charcode <= 122) {
            charcode = charcode - numero_casas;

            charcode = charcode < 97 ? 123 - (97 - charcode) : charcode;
        }
        decifrado += String.fromCharCode(charcode);
    };
    
    return decifrado;
}

module.exports= {
    decifrar
}