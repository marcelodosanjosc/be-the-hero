const connectino = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body

        const ong = await connectino('ongs')
        .where('id', id).select('name').first()
        
        if (!ong){
            return response.status(400).json({error: 'Não exite ID para essa ONG'})
        }
        return response.json(ong)
    } 

}