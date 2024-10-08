const sequelize = require('../helpers/connection');
const { DataTypes } = require('sequelize');

const businessInfo = sequelize.define('businessInfo', {
    businessInfoId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    businessName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    openingTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    closingTime: {
        type: DataTypes.TIME,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    mobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isNumeric: true,
            len: [10, 15]
        }
    },
    restaurentImg: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    freezeTableName: true
});



// businessInfo.sync({alter:true}).then(()=>{
//     console.log("business table synced successfully")
// }).catch((error)=>{
//     console.log("error in syncing the table",error)
// })


module.exports = businessInfo;
