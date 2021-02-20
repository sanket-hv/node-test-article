const Sequelize = require('sequelize');

const { db_name, db_pass, db_user, db_host } = require('./db.config.json')

const sequelize = new Sequelize(db_name, db_user, db_pass,
    {
        host: db_host,
        dialect: 'mysql',
        logging: false,
        dialectOptions: { //for reading from database
            dateStrings: true,
            typeCast: true
        },
        timezone: '+05:30'  //for writing to database
    },
)

sequelize.authenticate().then(() => { console.log(`Db connected: db_host:${db_host}, db_name:${db_name}, db_user:${db_user}, db_pass:${db_pass}`) }).catch(e => { console.log("Database not connected", e.message) })

module.exports = sequelize