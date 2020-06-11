const axios = require('axios');
require('dotenv').config();
const fs = require('fs');

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
        
        fs.writeFile('./answer.json', api, function (err) {
            if (err) return console.log(err);
            console.log('Arquivo Salvo!');
        });
        console.log(resultados);

    } catch (error) {
        console.log(error.response);
    }

}
apiGet()