import Sequelize from "sequelize";
import { sequelize } from '../database/database';
//Data Acces Object design pattern
const Company = sequelize.define('company', {
	companyId: {
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV4,
		primaryKey: true
	},
	companyName: {
		type: Sequelize.VARCHAR
	},
	email: {
		type: Sequelize.VARCHAR
	}
});
export default Company;