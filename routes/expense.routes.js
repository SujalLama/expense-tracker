const express = require('express')
const expenseCtrl = require('../controllers/expense.controller')
const authCtrl = require('../controllers/auth.controller')

const router = express.Router()

router.route('/current/preview')
  .get(authCtrl.requireSignin, expenseCtrl.currentMonthPreview)

router.route('/by/category')
  .get(authCtrl.requireSignin, expenseCtrl.expenseByCategory)

router.route('/plot')
  .get(authCtrl.requireSignin, expenseCtrl.plotExpenses)

router.route('/category/averages')
  .get(authCtrl.requireSignin, expenseCtrl.averageCategories)

router.route('/yearly')
  .get(authCtrl.requireSignin, expenseCtrl.yearlyExpenses)

router.route('/')
  .post(authCtrl.requireSignin, expenseCtrl.create)
  .get(authCtrl.requireSignin, expenseCtrl.listByUser)

router.route('/:expenseId')
  // .get(authCtrl.requireSignin, expenseCtrl.read)
  .put(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.update)
  .delete(authCtrl.requireSignin, expenseCtrl.hasAuthorization, expenseCtrl.remove)

router.param('expenseId', expenseCtrl.expenseByID)

module.exports = router
