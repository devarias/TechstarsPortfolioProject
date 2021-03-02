import Sequelize from "sequelize";

export const sequelize = new Sequelize (
	'ts_api',
	'api_admin',
	'ts',
	{
		host: 'localhost',
		dialect: 'postgres',
		pool: {
			max: 20,
			min: 0,
			require: 30000,
			idle: 10000


		},
		logging: false
	}

)