const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const decode = require('./utils/CifraCesar');
const hash = require('./utils/SecureHash');
const post = require('./utils/Enviar');

async function apiGet() {
    try {
        const apiResponse = await axios.get(`${process.env.APICODENATION}`);

        let resultados = {
            numero_casas,
            cifrado,
            decifrado,
            resumo_criptografico,
        } = apiResponse.data;

        fs.writeFileSync(path.resolve('answer.json'), JSON.stringify(resultados), function (err) {
            if (err) return console.log(err);
            return console.log('Arquivo Salvo!');
        });

        decode.decifrar(cifrado, numero_casas);

        let leituraArquivo = fs.readFileSync(path.resolve('answer.json'), 'utf8');

        resultados = JSON.parse(leituraArquivo);
        resultados.decifrado = decifrado;

        fs.writeFileSync(path.resolve('answer.json'), JSON.stringify(resultados), function (err) {
            if (err) return console.log(err);
            return console.log('Arquivo atualizado!');
        });

        const sha1 = hash.hashCode(decifrado);

        resultados.resumo_criptografico = sha1;

        fs.writeFileSync(path.resolve('answer.json'), JSON.stringify(resultados), function (err) {
            if (err) return console.log(err);
            return console.log('Arquivo atualizado!');
        });
        
        console.log(resultados)

        post.enviar()

    } catch (error) {
        console.log(error.response);
    }
}
apiGet();