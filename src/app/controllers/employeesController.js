import Employee from '../models/Employee.js'

export const index = async (req, res) => {
    try {
        let result = await Employee.index()
        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

export const show = async (req, res) => {
    try {
        let id = req.params.id
        let result = await Employee.show( id )
        res.status(200)
        .send( result )
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

export const create = async (req, res) => {
    try {
        let body = req.body
        let result = await Employee.create( body )

        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

export const update = async (req, res) => {
    try {
        let id = req.params.id

        let body = req.body
        let result = await Employee.update( id, body )

        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

