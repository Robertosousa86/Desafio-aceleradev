const axios = require('axios');
require('dotenv').config();
const fs = require('fs');

const decode = require('./utils/CifraCesar');
const hash = require('./utils/SecureHash');

async function apiGet() {
    try {
        const apiResponse = await axios.get(`${process.env.APICODENATION}`);

        let resultados = {
            numero_casas,
            cifrado,
            decifrado,
            resumo_criptografico,
        } = apiResponse.data;

        const api = JSON.stringify(resultados);

        fs.writeFileSync('./answer.json', api, function (err) {
            if (err) return console.log(err);
            console.log('Arquivo Salvo!');
        });

        console.log(resultados);

        decode.decifrar(cifrado, numero_casas);
        apiResponse.data.decifrado = decifrado;

        console.log(resultados)

        const sha1 = hash.hashCode(decifrado);

        apiResponse.data.resumo_criptografico = sha1;

        console.log(resultados);

    } catch (error) {
        console.log(error.response);
    }

}
apiGet()