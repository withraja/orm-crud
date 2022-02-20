const { ActorFilmController } = require('../controller')
const router = require('express').Router()

router.get('/', ActorFilmController.getActorFilms)
router.get('/:id', ActorFilmController.getActorFilm)
router.post('/', ActorFilmController.createActorFilm)
router.put('/:id', ActorFilmController.updateActorFilm)
router.delete('/:id', ActorFilmController.deleteActorFilm)

module.exports = router