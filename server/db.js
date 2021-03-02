const { Sequelize } = require('sequelize')
const { credentials } = require('./config')
const { connectionString } = credentials.postgres
const DaysModel = require('./models/days')
const BlocksModel = require('./models/blocks')
const SlotsModel = require('./models/slots')
const CompaniesModel = require('./models/companies')
const MentorsModel = require('./models/mentors')
const ScheduleModel = require('./models/schedule')

const sequelize = new Sequelize(connectionString, {
    define: {
        freezeTableName: true,
        timestamps: false,
      }
  });

const days = DaysModel(sequelize, Sequelize)
const blocks = BlocksModel(sequelize, Sequelize)
const slots = SlotsModel(sequelize, Sequelize)
const companies = CompaniesModel(sequelize, Sequelize)
const mentors = MentorsModel(sequelize, Sequelize)
const schedule = ScheduleModel(sequelize, Sequelize)



// schedule.hasMany(mentors, {
//     foreignKey: {
//         name: 'mentor_id',
//         allowNull: false
//     }
//   })
// mentors.belongsTo(schedule)

// schedule.hasMany(days, {
//     foreignKey: {
//         name: 'day_id',
//         allowNull: false
//     }
//   })
// days.belongsTo(schedule)


// schedule.hasMany(companies, {
//     foreignKey: {
//         name: 'company_id',
//         allowNull: false
//     }
//   })
// companies.belongsTo(schedule)

// schedule.hasMany(blocks, {
//     foreignKey: {
//         name: 'block_id',
//         allowNull: false
//     }
//   })
// blocks.belongsTo(schedule)


// schedule.hasMany(slots, {
//     foreignKey: {
//         name: 'slot_id',
//         allowNull: false
//     }
//   })
// slots.belongsTo(schedule)

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  days,
  blocks,
  slots,
  companies,
  mentors,
  schedule
}