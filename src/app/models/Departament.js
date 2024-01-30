import DATABASE from '../../config/database.js'

export default {

    async index(){
        let response = await DATABASE
        .select('*')
        .from('departaments')

        return response
    },

    async show( id ){
        let response = await DATABASE
        .from('departaments')
        .where('id', id)
        .first()

        return response
    },

    async create( data ){
        let response = await DATABASE
        .from('departaments')
        .insert(data)

        return response
    },

    async update(id, data ){
        await DATABASE
        .from('departaments')
        .where('id', id)
        .update(data)

        let response = await DATABASE
        .from('departaments')
        .where('id', id)
        .first()

        return response
    }
}


