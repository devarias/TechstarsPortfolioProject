module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mentors', {
        mentor_id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
        },
        mentor: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            // validate: {
            //     isEmail: {
            //         msg: "Email address must be valid"
            //     },
            // },
        },
    })
}