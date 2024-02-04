import DATABASE from '../../config/database.js'

export default {

    async findOne( email ){
        let response = await DATABASE
        .from('users')
        .where('email', email)
        .first()

        return response
    },

    async create( data ){
        let response = await DATABASE
        .from('users')
        .insert(data)

        return response
    }
}


