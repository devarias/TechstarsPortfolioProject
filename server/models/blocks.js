module.exports = (sequelize, DataTypes) => {
    return sequelize.define('blocks', {
        block_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        block: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
    })
}