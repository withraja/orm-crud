const router = require('express').Router()
const filmRoute = require('./film.route')
const actorRoute = require('./actor.route')
const productionHouseRoute = require('./productionhouse.route')
const ActorFilmRoute = require('./actorfilm.route')


router.use("/film", filmRoute)
router.use("/actor", actorRoute)
router.use("/productionHouse", productionHouseRoute)
router.use("/ActorFilm", ActorFilmRoute)



module.exports = router