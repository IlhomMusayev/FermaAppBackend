const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('../../models/UserModel');

const sequelize = new Sequelize('postgres://postgres:qwerty@localhost:5432/ferma', {
    logging: false,
});  

module.exports = async function postgres() {
    try {
        await sequelize.authenticate();

        let db = {}

        db.users = await UserModel(sequelize, Sequelize)


        await sequelize.sync({ force: false });
        
        return db
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
