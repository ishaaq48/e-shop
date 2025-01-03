import express from 'express'
const router = express.Router()

import {  addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOderToDelivered,
    getOrders } from '../controllers/orderController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(protect, admin, getOrders).post(protect,addOrderItems)
router.route('/mine').get(protect,getMyOrders)
router.route('/:id').get(protect,getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,admin,updateOderToDelivered)

export default router 