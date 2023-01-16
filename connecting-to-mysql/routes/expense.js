const express = require('express');

const router = express.Router();

const expenseController = require('../controllers/expense');

router.get('/get-expenseList', expenseController.getExpenseList);

router.post('/add-expense', expenseController.addExpense);

router.delete('/delete-expense/:expenseId', expenseController.deleteExpense);

router.put('/edit-expense/:expenseId', expenseController.updateExpense)

module.exports = router;