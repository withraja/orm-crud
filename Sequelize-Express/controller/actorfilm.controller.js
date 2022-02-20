const { ActorFilm } = require('../models')

class ActorFilmController {
    static async getActorFilms(req, res) {
        const data = await ActorFilm.findAll()
        res.status(200).json({ data })
    }

    static async getActorFilm(req, res) {
        const data = await ActorFilms.findOne(
            { where: { id: req.params.id } }
        )
        res.status(200).json({ data })
    }

    static async updateActorFilm(req, res) {
        const { ActorId, FilmId } = req.body
        const payload = { ActorId, FilmId }
        const updated = await ActorFilms.update(payload, { 
            where: { id: req.params.id},
            returning: true
        })
        res.status(200).json({ data: updated })
    }

    static async createActorFilm(req, res) {
        const { ActorId, FilmId } = req.body
        const payload = { ActorId, FilmId }
        const newActorFilm = await ActorFilms.create(payload)
        res.status(200).json({ data: newActorFilm })
    }

    static async deleteActorFilm(req, res) {
        const deleted = await ActorFilms.destroy({
            where: { id: req.params.id },
            returning: true
        })
        res.status(200).json({ data: deleted })
    }
}

module.exports = ActorFilmController