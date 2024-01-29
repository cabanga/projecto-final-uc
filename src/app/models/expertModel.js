import { DATABASE } from '../config/database'


export default {
    async create( data ){
        let response = await DATABASE
        .from('exports')
        .insert(data)

        return response
    },

    async update(id, data ){
        let response = await DATABASE
        .from('exports')
        .where('id', id)
        .update(data)

        return response
    },

    async show( id ){
        let response = await DATABASE
        .from('exports')
        .find(id)

        return response
    },

    async index(){
        let response = await DATABASE
        .select('*')
        .from('exports')

        return response
    }
}
