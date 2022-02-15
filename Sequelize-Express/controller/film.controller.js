const { Films } = require('../models')
const uuid = require('uuid')

class FilmController {
    static async getFilms(req, res) {
        const data = await Films.findAll()
        res.status(200).json({ data })
    }

    static async getFilm(req, res) {
        const data = await Films.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json({ data })
    }

    static async updateFilm(req, res) {
        const { title, releaseDate, synopsis, rating } = req.body
        const payload = { title, releaseDate, synopsis, rating }
        const updated = await Films.update(payload, { 
            where: { id: req.params.id},
            returning: true
        })
        res.status(200).json({ data: updated })
    }

    static async createFilm(req, res) {
        const id = uuid.v4()
        const { title, releaseDate, synopsis, rating } = req.body
        const payload = { id, title, releaseDate, synopsis, rating }
        const newFilm = await Films.create(payload)
        res.status(200).json({ data: newFilm })
    }

    static async deleteFilm(req, res) {
        const deleted = await Films.destroy({
            where: { id: req.params.id },
            returning: true
        })
        res.status(200).json({ data: deleted })
    }
}

module.exports = FilmController