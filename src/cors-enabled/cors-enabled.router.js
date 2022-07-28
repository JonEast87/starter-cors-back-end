const router = require('express').Router()
const controller = require('./cors-enabled.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')
const cors = require('cors')

// const corsDelete = cors({ methods: 'DELETE ' }) // CORS just for the delete button

// router.use(cors()) // adds CORS to the entire router

router
	.route('/:corsId')
	// .all(cors())
	.get(controller.read)
	.put(controller.update)
	// .delete(corsDelete, controller.delete) // just CORS for delete
	// .options(corsDelete)  // CORS is enabled for routes that have OPTIONS
	.delete(controller.delete)
	.all(methodNotAllowed)

router
	.route('/')
	.get(cors(), controller.list)
	.post(controller.create)
	.all(methodNotAllowed)

module.exports = router
