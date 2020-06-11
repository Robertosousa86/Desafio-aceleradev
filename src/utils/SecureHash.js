const crypto = require('crypto'); // importa o crypto

function hashCode(decifrado) {
    return sha1 = crypto.createHash('sha1').update(decifrado).digest('hex');
}

module.exports = {
    hashCode
}