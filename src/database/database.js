import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'postgres',
  'postgres',
  '10020891852000',
  {
    host: 'localhost',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< THIS
      },
    },
    pool: {
      max: 20,
      min: 0,
      require: 30000,
      idle: 10000,
    },
    logging: false,
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);
