const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const uuidv4 = require('uuid/v4');

const user = sequelize.define('User', {
    userId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    lastName: {
        type: DataTypes.STRING
    },
    createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
},
{
    freezeTableName: true,
    timestamps: false
}
);

module.exports = user;

