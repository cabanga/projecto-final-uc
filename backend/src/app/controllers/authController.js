import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const verifyEmail = await User.findOne( email )

        if (verifyEmail) {
            return res.status(403).json({
                message: `Já existe uma conta com o e-mail ${email}`,
                data: {},
                success: false
            })
        } else {
            bcrypt.hash(password, 10)
            .then((hash) => {
                const payload = {
                    name: name,
                    email: email,
                    password: hash
                }

                let result = User.create(payload)
                if ( result ) {
                    return res.status(201).json({
                        message: 'Utitlizador registado com sucesso!',
                        data: payload,
                        success: true
                    })
                }
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne( email )

        if ( user ) {
            let result = await bcrypt.compare(password, user.password)

            if ( result ) {
                let jwtToken = jwt.sign(
                    user,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "1h"
                    }
                )
                return res.status(200).json({
                    user: user,
                    token: jwtToken
                })
            }
        } else {
            return res.status(401).json({
                message: 'Senha ou e-mail errado...',
                success: false
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ errors: err })
    }
}

