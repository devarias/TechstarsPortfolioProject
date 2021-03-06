import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'd26u4bpar7mrdt',
  'xioyhwciyozhst',
  'c00629ae0c0425b1841dd8fa85303b15f2b1129552f96285f2169a9f6b760674',
  {
    host: 'ec2-54-197-228-62.compute-1.amazonaws.com',
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
  }
);
