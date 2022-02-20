const { Actors, Films } = require('../models')
const uuid = require('uuid')

class ActorController {
    static async getActors(req, res) {
        const data = await Actors.findAll()
        res.status(200).json({ data })
    }

    static async getActor(req, res) {
        const options = {
            where: { id: req.params.id },
            // Memasukkan Actor sesuai FilmId
            include: [
                { 
                    model: Films,
                    attribute: ['title'] 
                }
            ]
        }
        const data = await Actors.findOne(options)
        res.status(200).json({ data })
    }

    static async updateActor(req, res) {
        const { name, birth, age, bio, nationality } = req.body
        const payload = { name, birth, age, bio, nationality }
        const updated = await Actors.update(payload, { 
            where: { id: req.params.id},
            returning: true
        })
        res.status(200).json({ data: updated })
    }

    static async createActor(req, res) {
        const id = uuid.v4()
        const { name, birth, age, bio, nationality } = req.body
        const payload = { id, name, birth, age, bio, nationality }
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