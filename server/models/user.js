const Sequelize = require('sequelize')
const {STRING} = Sequelize

const sequelize = new Sequelize(`postgres://postgres:learnlovecode@127.0.0.1:5432/mod_5_project`);


const User = sequelize.define('user', {
    username: {
        type: STRING
    },
    email: {
        type: STRING
    },
    password: {
        type: STRING
    }
})


module.exports = User

sequelize.sync()


 