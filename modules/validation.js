const joi = require('joi');

// joi create user settings
module.exports = class Validations {
    static async createUserValidation(data, Error) {
        return await joi.object({
            name: joi.string().required().max(64).min(16).error(new Error("Name is invalid")),
            password: joi.string().required().error(new Error("Password is invalid")),
            username: joi.string().required().error(new Error("Username is invalid")),
            farmname: joi.string().required().error(new Error("Farm name is invalid")),
        }).validateAsync(data, Error);
    }
}
