import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Mentor_survey from './Mentor_survey';

const Mentor = sequelize.define(
  'mentor',
  {
    mentor_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    mentor_name: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
Mentor.hasMany(Mentor_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
Mentor.hasMany(Company_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
Mentor_survey.belongsTo(Mentor, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
Mentor.belongsTo(Company_survey, {
  foreignKey: 'mentor_id',
  sourceKey: 'mentor_id',
});
export default Mentor;
