const { createUserValidation } = require('../modules/validation.js')
module.exports = class UserControllers {
    static async createUser(req, res, next) {
        try {
			console.log(req.body)

            const { name, username, password, farmname } = await req.body;
            console.log(name, username, password, farmname);

			const data = await createUserValidation(req.body, res.error);

			const user = await req.db.users.create({
				user_name: data.name,
				user_password: data.password,
				user_username: data.username,
				farm_name: data.farmname,
			});

			res.status(201).json({
				ok: true,
				message: "User created successfully",
			});
        } catch (e) {
            next(e)
        }
    }
}
