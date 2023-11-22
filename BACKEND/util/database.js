const Sequelize = require('sequelize');

const sequelize = new Sequelize("nodejs","root","Hamlet#12@03",{   //In the given code snippet, "nodejs" represents the name of the database you want to connect to using Sequelize.
    dialect:"mysql",
    host:"localhost"
});

module.exports = sequelize;