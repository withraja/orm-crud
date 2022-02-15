const { FilmController } = require('../controller')
const router = require('express').Router()

router.get('/', FilmController.getFilms)
router.get('/:id', FilmController.getFilm)
router.post('/', FilmController.createFilm)
router.put('/:id', FilmController.updateFilm)
router.delete('/:id', FilmController.deleteFilm)

module.exports = router