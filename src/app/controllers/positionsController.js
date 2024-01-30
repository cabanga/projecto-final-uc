import Position from '../models/Position.js'

export const index = async (req, res) => {
    try {
        let result = await Position.index()
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
        let result = await Position.show( id )
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
        let result = await Position.create( body )

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
        let result = await Position.update( id, body )

        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

