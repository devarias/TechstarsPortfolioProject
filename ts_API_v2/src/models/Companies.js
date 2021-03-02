import Sequelize from "sequelize";
import { sequelize } from '../database/database';
//Data Acces Object design pattern
const Company = sequelize.define('company', {
	company_id: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true
	},
	company_name: {
		type: Sequelize.TEXT
	},
	email: {
		type: Sequelize.TEXT
	}
}, {
	timestamps: false
});
export default Company;