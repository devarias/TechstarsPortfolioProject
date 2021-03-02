const { credentials } = require('./config')

const { Client } = require('pg')
const { connectionString } = credentials.postgres
const client = new Client({ connectionString })

const createScript = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE IF NOT EXISTS days (
    day_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    day varchar(10) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS blocks (
    block_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    block varchar(10) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS companies (
    company_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    company varchar(100) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS slots (
    slot_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    slot time(0) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS mentors (
    mentor_id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    mentor varchar(100) NOT NULL,
    email varchar(100)
  );
  CREATE TABLE IF NOT EXISTS schedule (
    mentor_id uuid REFERENCES mentors ON DELETE CASCADE ON UPDATE CASCADE,
    day_id uuid REFERENCES days ON DELETE CASCADE ON UPDATE CASCADE,
    block_id uuid REFERENCES blocks ON DELETE CASCADE ON UPDATE CASCADE,
    company_id uuid REFERENCES companies ON DELETE CASCADE ON UPDATE CASCADE,
    slot_id uuid REFERENCES slots ON DELETE CASCADE ON UPDATE CASCADE
  );
`

const getDaysCount = async client => {
  const { rows } = await client.query('SELECT COUNT(*) FROM DAYS')
  return Number(rows[0].count)
}

const seedDays = async client => {
  const sql = `
    INSERT INTO days(
      day
    ) VALUES ($1)
  `
  await client.query(sql, [
    'Monday'
  ])
  await client.query(sql, [
    'Tuesday'
  ])
  await client.query(sql, [
    'Wednesday',
  ])
  await client.query(sql, [
    'Thursday',
  ])
  await client.query(sql, [
    'Friday',
  ])
}

const getBlocksCount = async client => {
    const { rows } = await client.query('SELECT COUNT(*) FROM BLOCKS')
    return Number(rows[0].count)
  }
  
const seedBlocks = async client => {
    const sql = `
      INSERT INTO blocks(
        block
      ) VALUES ($1)
    `
    await client.query(sql, [
      'AM'
    ])
    await client.query(sql, [
      'PM'
    ])
  }

const getSlotsCount = async client => {
    const { rows } = await client.query('SELECT COUNT(*) FROM SLOTS')
    return Number(rows[0].count)
  }
  
  const seedSlots = async client => {
    const sql = `
      INSERT INTO slots(
        slot
      ) VALUES ($1)
    `
    await client.query(sql, [
      '08:00:00'
    ])
    await client.query(sql, [
      '08:20:00'
    ])
    await client.query(sql, [
      '08:40:00'
    ])
    await client.query(sql, [
      '09:00:00'
    ])
    await client.query(sql, [
      '09:20:00'
    ])
    await client.query(sql, [
      '09:40:00'
    ])
    await client.query(sql, [
      '10:00:00'
    ])
    await client.query(sql, [
      '10:20:00'
    ])
    await client.query(sql, [
      '10:40:00'
    ])
    await client.query(sql, [
      '11:00:00'
    ])
    await client.query(sql, [
      '11:20:00'
    ])
    await client.query(sql, [
      '11:40:00'
    ])
    await client.query(sql, [
      '14:00:00'
    ])
    await client.query(sql, [
      '14:20:00'
    ])
    await client.query(sql, [
      '14:40:00'
    ])
    await client.query(sql, [
      '15:00:00'
    ])
    await client.query(sql, [
      '15:20:00'
    ])
    await client.query(sql, [
      '15:40:00'
    ])
    await client.query(sql, [
      '16:00:00'
    ])
    await client.query(sql, [
      '16:20:00'
    ])
    await client.query(sql, [
      '16:40:00'
    ])
    await client.query(sql, [
      '17:00:00'
    ])
    await client.query(sql, [
      '17:20:00'
    ])
    await client.query(sql, [
      '17:40:00'
    ])
  }
  
client.connect().then(async () => {
  try {
    console.log('creating database schema')
    await client.query(createScript)
    const daysCount = await getDaysCount(client)
    if(daysCount === 0) {
      console.log('seeding days')
      await seedDays(client)
    }
    const blocksCount = await getBlocksCount(client)
    if(blocksCount === 0) {
      console.log('seeding blocks')
      await seedBlocks(client)
    }
    const slotsCount = await getSlotsCount(client)
    if(slotsCount === 0) {
      console.log('seeding slots')
      await seedSlots(client)
    }
  } catch(err) {
    console.log('ERROR: could not initialize database')
    console.log(err.message)
  } finally {
    client.end()
  }
})