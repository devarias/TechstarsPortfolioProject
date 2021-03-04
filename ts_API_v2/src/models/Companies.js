import Sequelize from 'sequelize';
import { sequelize } from '../database/database';
import Company_survey from './Company_survey';
//Data Acces Object design pattern
const Company = sequelize.define(
  'company',
  {
    company_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    company_name: {
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
Company.hasMany(Company_survey, {
  foreignKey: 'company_id',
  sourceKey: 'company_id',
});
Company.hasMany(Mentor_survey, {
  foreignKey: 'company_id',
  sourceKey: 'company_id',
});
Company_survey.belongsTo(Company, {
  foreignKey: 'company_id',
  sourceKey: 'company_id',
});
Company.belongsTo(Mentor_survey, {
  foreignKey: 'company_id',
  sourceKey: 'company_id',
});
export default Company;
