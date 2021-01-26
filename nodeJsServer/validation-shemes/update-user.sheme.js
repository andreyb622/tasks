const Joi = require('joi');

const updateUserSheme = Joi.object({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required(),

  login: Joi.string(),

  birth_year: Joi.number()
    .integer()
    .min(1900)
    .max(2013),
        
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

  access_token: [
    Joi.string(),
    Joi.number()
  ]
})
  .with('username', 'birth_year')
  .xor('password', 'access_token')

module.exports = updateUserSheme;