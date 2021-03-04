module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'schedule',
    {
      meet_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      mentor_id: {
        type: DataTypes.UUID,
      },
      day_id: {
        type: DataTypes.UUID,
      },
      block_id: {
        type: DataTypes.UUID,
      },
      company_id: {
        type: DataTypes.UUID,
      },
      slot_id: {
        type: DataTypes.UUID,
      },
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
};
