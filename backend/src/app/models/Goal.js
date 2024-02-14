import DATABASE from '../../config/database.js'

export default {

    async index(){
        let response = await DATABASE
        .select('*')
        .from('goals')

        return response
    },

    async show( id ){
        let response = await DATABASE
        .from('goals')
        .where('id', id)
        .first()

        return response
    },

    async create( data ){
        let response = await DATABASE
        .from('goals')
        .insert(data)

        return response
    },

    async update(id, data ){
        await DATABASE
        .from('goals')
        .where('id', id)
        .update(data)

        let response = await DATABASE
        .from('goals')
        .where('id', id)
        .first()

        return response
    }
}


