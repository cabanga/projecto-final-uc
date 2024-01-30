var positionModel = require('../models/positionModel')

exports.index = async (req, res) => {
    try {
        let result = await positionModel.index()
        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

exports.show = async (req, res) => {
    try {
        let id = req.params.id
        let result = await positionModel.show( id )
        res.status(200)
        .send( result )
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

exports.create = async (req, res) => {
    try {
        let body = req.body
        let result = await positionModel.create( body )

        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

exports.update = async (req, res) => {
    try {
        let id = req.params.id

        let body = req.body
        let result = await positionModel.update( id, body )

        console.log( result )
        res.status(200)
        .send(result)
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

