const { Actors } = require('../models')
const uuid = require('uuid')

class ActorController {
    static async getActors(req, res) {
        const data = await Actors.findAll()
        res.status(200).json({ data })
    }

    static async getActor(req, res) {
        const data = await Actors.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json({ data })
    }

    static async updateActor(req, res) {
        const { name, FilmId, birth, age, bio, nationality } = req.body
        const payload = { name, FilmId, birth, age, bio, nationality }
        const updated = await Actors.update(payload, { 
            where: { id: req.params.id},
            returning: true
        })
        res.status(200).json({ data: updated })
    }

    static async createActor(req, res) {
        const id = uuid.v4()
        const { name, FilmId, birth, age, bio, nationality } = req.body
        const payload = { id, name, FilmId, birth, age, bio, nationality }
        const newActor = await Actors.create(payload)
        res.status(200).json({ data: newActor })
    }

    static async deleteActor(req, res) {
        const deleted = await Actors.destroy({
            where: { id: req.params.id },
            returning: true
        })
        res.status(200).json({ data: deleted })
    }
}

module.exports = ActorController