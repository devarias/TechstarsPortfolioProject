import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
  'd5jv4131ii1ddf',
  'mqcslhctzeilty',
  'd39ebaac7245cc4763a2a261076c5a17b7c3da97b3c1f4533f0e7f84013ef957',
  {
    host: 'ec2-3-224-251-47.compute-1.amazonaws.com',
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
