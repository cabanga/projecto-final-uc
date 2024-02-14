import Departament from '../models/Departament.js'

export const index = async (req, res) => {
    try {
        let result = await Departament.index()
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
        let result = await Departament.show( id )
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
        let result = await Departament.create( body )

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
        let result = await Departament.update( id, body )

        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

