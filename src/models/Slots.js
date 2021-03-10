import Sequelize from 'sequelize';
import { sequelize } from '../database/database';

const slots = sequelize.define('slots', {
  slot_id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  slot: {
    type: Sequelize.TIME(0),
    allowNull: false,
  },
});
export default slots;
