const businessInfo = require('./businessInfo');
const owner = require('./owner');

// Define associations
businessInfo.hasMany(owner, {
    foreignKey: 'businessInfoId',
    as: 'owner'
});

// Sync all models if needed
// Promise.all([
//     businessInfo.sync({ alter: true }),
//     owner.sync({ alter: true }),
// ]).then(() => {
//     console.log("All tables synced successfully");
// }).catch((error) => {
//     console.log("Error in syncing tables:", error);
// });
