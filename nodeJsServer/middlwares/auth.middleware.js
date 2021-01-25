const jwt = require('jsonwebtoken');
const usersServices = require('../services/users.services');

const auth = (token) => (req, res, next) => {
    try {
        const [strategy , token] = req.headers['authorization'].split(' ');
        const result = jwt.verify(token, 'secret'); 
        const authorizedUser = usersServices.getUsers().find( user => user.login === result.login) 
        console.log(authorizedUser)
        next();
    } catch (err) {
        res.status(401).send('not authorized')
    }
}

module.exports = auth;