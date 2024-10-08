const sequelize = require('../helpers/connection');
const DataTypes = require('sequelize');
const businessInfo = require('./businessInfo'); 

const owner = sequelize.define('owner', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    profilePic: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.TEXT,
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
    }
}, {
    freezeTableName: true
});

businessInfo.hasMany(owner,{foreignKey:'businessInfoId'})
owner.belongsTo(businessInfo,{foreignKey:'businessInfoId'})

// owner.sync({alter:true}).then(()=>{
//     console.log("owner table synced successfully")
// }).catch((error)=>{
//     console.log("error in syncing the table",error)
// })


module.exports = owner;
