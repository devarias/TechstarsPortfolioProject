module.exports = (sequelize, DataTypes) => {
    return sequelize.define('companies', {
        company_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        company: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    })
}