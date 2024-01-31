import DATABASE from '../../config/database.js'

export default {

    async index(){
        let response = await DATABASE
        .select('*')
        .from('metrics')

        return response
    },

    async show( id ){
        let response = await DATABASE
        .from('metrics')
        .where('id', id)
        .first()

        return response
    },

    async create( data ){
        let response = await DATABASE
        .from('metrics')
        .insert(data)

        return response
    },

    async update(id, data ){
        await DATABASE
        .from('metrics')
        .where('id', id)
        .update(data)

        let response = await DATABASE
        .from('metrics')
        .where('id', id)
        .first()

        return response
    }
}


