import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const Company_survey = sequelize.define(
  'company_survey',
  {
    survey_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    mentor_id: {
      type: Sequelize.UUID,
    },
    company_id: {
      type: Sequelize.UUID,
    },
    vote: {
      type: Sequelize.INTEGER,
    },
    feedback: {
      type: Sequelize.TEXT,
    },
    preference: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

export default Company_survey;
