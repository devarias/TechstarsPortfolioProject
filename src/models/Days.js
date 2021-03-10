import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const days = sequelize.define('days', {
  day_id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  day: {
    type: Sequelize.STRING(10),
    allowNull: false,
  },
});
export default days;
