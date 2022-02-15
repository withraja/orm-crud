const { ActorController } = require('../controller')
const router = require('express').Router()

router.get('/', ActorController.getActors)
router.get('/:id', ActorController.getActor)
router.post('/', ActorController.createActor)
router.put('/:id', ActorController.updateActor)
router.delete('/:id', ActorController.deleteActor)

module.exports = router