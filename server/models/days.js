module.exports = (sequelize, DataTypes) => {
    return sequelize.define('days', {
        day_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        day: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
    })
}