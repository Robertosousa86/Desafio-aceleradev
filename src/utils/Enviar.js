const axios = require('axios');
require('dotenv').config();
const fs = require('fs');
const FORM = require('form-data');
const path = require('path');

const form = FORM();

const stream = fs.createReadStream(path.resolve('answer.json'));

form.append('answer', stream);

const formHeaders = form.getHeaders();

async function enviar() {
    axios.post(`${process.env.APISOLUTION}`, form, {
            headers: {
                ...formHeaders,
            },
        })
        .then(response => response)

        .catch(error => error);
}
module.exports = {
    enviar
}