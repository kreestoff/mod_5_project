const Sequelize = require('sequelize')
const {INTEGER} = Sequelize

const sequelize = new Sequelize(`postgres://postgres:learnlovecode@127.0.0.1:5432/mod_5_project`);


const Vote = sequelize.define('vote', {
    post_id: {
        type: INTEGER,
        allowNull: true
    },
    comment_id: {
        type: INTEGER, 
        allowNull: true
    },
    user_id: {
        type: INTEGER,
        allowNull: false
    },
    vote: {
        type: INTEGER,
        allowNull: false
    }
})

module.exports = Vote

sequelize.sync()