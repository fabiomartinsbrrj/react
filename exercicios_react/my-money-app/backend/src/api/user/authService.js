const _ = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')

const emailRegex = /\S+@\S+\.\S+/
// senha tem que ter entre 6 e 20 caracter minusculo, maiusculo e caracter especial
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = []

    _.forIn(dbErrors.errors, error => errors.push(error.message))

    return resizeBy.status(400).json({ errors })
}


const login =  (req, res, next) => {

    const email = req.body.email || ''
    const password = req.body.password || ''

    User.findOne( {email}, (err, user) => {

        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync( password, user.password)) {

            const token = jwt.sign(user, env.authSecret, {
                expiresIn : '1 day'
            })

            const {name, email} = user
            res.json( { name, email, token})

        } else {
            return res.status(400).json( {errors: ['Usuário/Senha inválidos']})
        }

    } )


}

const validateToken = (req, res, next) => {
    const token = req.body.token || ''

    jwt.verify(token, env.authSecret, function(err, decode)  {
        return res.status(200).send({valid: !err})
    })
}

const signup = (req, res, mext) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password
    const confirmPassword = req.body.confirm_password || ''

    if (! email.match(emailRegex)) {
        return res.status(400).send(  { errors: ['O e-mail informado está inválido']} )
    }

    if (! password.match(passwordRegex)) {
        return res.status(400).send( {
            errors: [
                "A senha precisa ter: uma letra maiúscula, uma letra minúscula, um número, um caracter especial (@#$ %) e tamanho entre 6-20."
            ]
        })
    }

    const salt = bcrypt.genSaltSync()
    const passwordHash = bcrypt.hashSync(password, salt)
    if (!bcrypt.compareSync(confirmPassword, passwordHash)) {
        return res.status(400).send({errors:['Senhas não confere.']})
    }

    User.findOne({email}, (err, user) => {
        if(err) {
            return sendErrorsFromDB(res, err)
        } else if(user) {
            res.status(400).send({ errors: ['Usuário já cadastrado.']})
        } else {
            const newUser = new User({ name, email, password: passwordHash})

            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(res, err)
                } else {
                    login(req,res,next)
                }
            })
        }
    })

}

module.exports = {login, signup, validateToken}