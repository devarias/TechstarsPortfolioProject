module.exports = (sequelize, DataTypes) => {
    return sequelize.define('schedule', {
        mentor_id: {
            type: DataTypes.UUID
        },
        day_id: {
            type: DataTypes.UUID
        },
        block_id:{
            type: DataTypes.UUID
        },
        company_id: {
            type: DataTypes.UUID
        },
        slot_id: {
            type: DataTypes.UUID
        }       
    })
}