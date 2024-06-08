const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/app')
const {validationResult} = require('express-validator')

exports.login = async(req, res) => {
    const {email, password} = req.body

    try {
        const secret = require('crypto').randomBytes(64).toString('hex')

        const user = await User.findOne({
            where: {
                email
            }
        })

        if (!user) {
            return res.status(404).json({message: 'User Not Found'})
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(404).json({message: 'Incorrect Password'})
        }

        const userWithToken = generateToken(user.get({raw: true}))
        return res.send(userWithToken)

    } catch (e) {
        return res.status(500).json({message: e.message})
    }

    return res.send([email, password])
}

exports.register = async(req, res) => {
    try {
        const user = await User.create(req.body)
        const userWithToken = generateToken(user.get({raw: true}))

        return res.send(userWithToken)
    }
    catch (e) {
        return res.status(500).json({message: e.message})
    }
}

const generateToken = (user) => {
    console.log(user)

    delete user.password;
    const token = jwt.sign(user, config.appKEY, { expiresIn: 86400 });

    return { ...user, token };
};
