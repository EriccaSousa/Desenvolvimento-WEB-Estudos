const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/get', function(req, res, next) {
  res.json(
    {users: [
      {name: 'Timmy'},
      {name: 'Jimmy'},
      {name: 'Billy'}
    ]}
  )
})

module.exports = router
