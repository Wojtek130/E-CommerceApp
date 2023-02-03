const { DataTypes } = require('sequelize')


module.exports = function (sequelize) {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true,
        },
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            min: 4
        },
        role: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        token: { type: DataTypes.STRING }
    })
  User.attributes = User.rawAttributes;

    return User;
};

