const { index } = require("./OngController");

const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization

        const incidetns = await connection('incidents')
        .where('ong_id', ong_id).select('*')

        return response.json(incidetns)
    }
}