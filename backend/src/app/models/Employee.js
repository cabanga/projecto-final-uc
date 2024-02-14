import DATABASE from '../../config/database.js'

export default {

    async index(){
        let response = await DATABASE
        .select(
            'employees.*',
            'positions.name AS position_name',
            'departaments.name AS departament_name'
        )
        .from('employees')
        .leftJoin('positions', 'positions.id', 'employees.position_id')
        .leftJoin('departaments', 'departaments.id', 'employees.departament_id')

        return response
    },

    

    async show( id ){
        let response = await DATABASE
        .select(
            'employees.*',
            'positions.name AS position_name',
            'departaments.name AS departament_name'
        )
        .from('employees')
        .leftJoin('positions', 'positions.id', 'employees.position_id')
        .leftJoin('departaments', 'departaments.id', 'employees.departament_id')
        .where('employees.id', id)
        .first()

        let assessments = await this.get_assessments(id)

        return Object.assign({
            employee: response,
            assessments: assessments
        })
    },

    async get_assessments(employee_id){
        let response = await DATABASE
        .select(
            'assessments.media_score AS media',
            'metrics.descriptions AS metric'
        )
        .from('assessments')
        .leftJoin('metrics', 'metrics.id', 'assessments.metric_id')

        .where('employee_id', employee_id)

        return response
    },



    async create( data ){
        let response = await DATABASE
        .from('employees')
        .insert(data)

        return response
    },

    async update(id, data ){
        await DATABASE
        .from('employees')
        .where('id', id)
        .update(data)

        let response = await DATABASE
        .from('employees')
        .where('id', id)
        .first()

        return response
    }
}


