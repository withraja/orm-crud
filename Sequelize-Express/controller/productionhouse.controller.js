const { productionHouse } = require('../models')
const uuid = require('uuid')

class productionHouseController {
    static async getproductionHouses(req, res) {
        const data = await productionHouse.findAll()
        res.status(200).json({ data })
    }

    static async getproductionHouse(req, res) {
        const data = await productionHouse.findOne({
            where: { id: req.params.id }
        })
        res.status(200).json({ data })
    }

    static async updateproductionHouse(req, res) {
        const { name } = req.body
        const payload = { name }
        const updated = await productionHouse.update(payload, { 
            where: { id: req.params.id},
            returning: true
        })
        res.status(200).json({ data: updated })
    }

    static async createproductionHouse(req, res) {
        try {
        const id = uuid.v4()
        const { name } = req.body
        const payload = { id, name }
        const newproductionHouse = await productionHouse.create(payload)
        res.status(200).json({ data: newproductionHouse })
        } catch (error) {
            console.log(error)
        }
    }

    static async deleteproductionHouse(req, res) {
        const deleted = await productionHouse.destroy({
            where: { id: req.params.id },
            returning: true
        })
        res.status(200).json({ data: deleted })
    }
}

module.exports = productionHouseController