const { productionHouseController } = require('../controller')
const router = require('express').Router()

router.get('/', productionHouseController.getproductionHouses)
router.get('/:id', productionHouseController.getproductionHouse)
router.post('/', productionHouseController.createproductionHouse)
router.put('/:id', productionHouseController.updateproductionHouse)
router.delete('/:id', productionHouseController.deleteproductionHouse)

module.exports = router