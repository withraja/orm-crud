const { Films, Actors } = require('../models')
const uuid = require('uuid')

class FilmController {
    static async getFilms(req, res) {
        const data = await Films.findAll()
        res.status(200).json({ data })
    }

    static async getFilm(req, res) {
        const options = {
            where: { id: req.params.id },
            // Memasukkan Actor sesuai FilmId
            include: [
                { 
                    model: Actors,
                    attribute: ['name'] 
                }
            ]
        }
        const data = await Films.findOne(options)
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