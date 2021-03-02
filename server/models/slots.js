module.exports = (sequelize, DataTypes) => {
    return sequelize.define('slots', {
        slot_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        slot: {
            type: DataTypes.TIME(0),
            allowNull: false,
        }
    })
}