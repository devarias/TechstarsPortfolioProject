import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Mentor_survey from './Mentor_survey';
import Company_survey from './Company_survey';

const mentors = sequelize.define(
  'mentors',
  {
    mentor_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    mentor: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
mentors.hasMany(Mentor_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
mentors.hasMany(Company_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
Mentor_survey.belongsTo(mentors, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
mentors.belongsTo(Company_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
export default mentors;
