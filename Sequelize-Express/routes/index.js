const router = require('express').Router()
const filmRoute = require('./film.route')


router.use("/film", filmRoute)


module.exports = router