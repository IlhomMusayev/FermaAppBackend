const express = require('express');
const routes = require('./routes/routes');
const postgres = require('./modules/postgres/database');
require('dotenv').config();

const PORT =  process.env.PORT || 3000

const app = express();


async function start() {
    try{
        app.listen(PORT, () => {
            console.log('Server is running on port 3000');
        });

        // connext sequelize
        const db = await postgres();
        app.use(async (req, res, next) => {
            req.db = await db;
            next();
        });

        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
    }
    catch (err) {
        console.log("SERVER" + err);
    } finally{
        routes(app);
    }
}

start()
