const express = require('express')
const bodyParser = require('body-parser')
const multiparty = require('multiparty')
const { days, blocks, slots, companies, mentors, schedule} = require('./db.js')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/api', cors())

const port = process.env.PORT || 3033

app.get('/api/mentors', (req, res) => {
    mentors.findAll().then(mentors => res.json(mentors))
})

app.post('/api/mentors', (req, res) => {
    mentors.create(req.body).then(mentor => res.json(mentor))
})

app.post('/api/schedule', (req, res) => {
  const info = req.body
  //console.log(info)
  for (row of info) {
    if (row.Name && row.Name.length > 0) {
      const newMentor = {mentor: row.Name, email: row.Email}
      //console.log(newMentor.mentor)
      mentors.create(newMentor)
    }
  }
  mentors.findAll().then(mentors => res.json(mentors))
})

if(require.main === module) {
  app.listen(port, () => {
    console.log( `Express started on http://localhost:${port}` +
      '; press Ctrl-C to terminate.' )
  })
} else {
  module.exports = app
}