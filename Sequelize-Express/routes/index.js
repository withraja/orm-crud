const router = require('express').Router()
const filmRoute = require('./film.route')
const actorRoute = require('./actor.route')


router.use("/film", filmRoute)
router.use("/actor", actorRoute)


module.exports = router