const BusinessInfo = require('../models/businessInfo')
const Owner = require('../models/owner')
const sequelize = require('../helpers/connection')
const businessInfo = require('../models/businessInfo')

exports.registerBusiness = async(owner,businessInfo)=>{
    const transaction = await sequelize.transaction()
    try {
        const newBusinessInfo = await BusinessInfo.create(businessInfo, { transaction });

        const newOwner = await Owner.create({
            ...owner,
            businessInfoId: newBusinessInfo.businessInfoId  
        }, { transaction });

        await transaction.commit();
        return { owner: newOwner, businessInfo: newBusinessInfo };

    } catch (error) {
        await transaction.rollback();
        return { error: 'failed to register business' };
    }
}

exports.getBusinessById = async(id)=>{
    try{
        const businessInfo = await BusinessInfo.findByPk(id,{
            include:{
                model:Owner,
                as:'owner'
            }
        });

        if(!businessInfo){
            return null;
        }

        return {businessInfo};
    }
    catch(error){
        console.log(error)
        throw new Error ('failed to fetch business details')
    }
}

exports.updateBusiness = async(id,owner,businessInfo)=>{
    try {
        const business = await BusinessInfo.findByPk(id);
        if (!business) {
            return null;
        }

        const ownerRecord = await Owner.findOne({ where: { businessInfoId: id } });
        if (!ownerRecord) {
            // return res.status(404).json({ error: 'Owner not found for this business' });
            return null;
        }

        await Owner.update(owner, { where: { businessInfoId: id } });

        await BusinessInfo.update(businessInfo, { where: { businessInfoId: id } }); 

        return 'Business updated successfully';
    } catch (error) {
        console.error('Error updating the business', error);
        throw new Error ('Error in updating the business')
    }
}

exports.getOwnerById = async(id)=>{
    try {
        const ownerDetails = await Owner.findOne({
            where: {
                businessInfoId: parseInt(id)
            }
        });

        if (!ownerDetails) {
            return null;
        }

        return ownerDetails;
    } catch (error) {
        console.log(error);
        throw new Error ('Failed to fetch owner details' );
    }
}

