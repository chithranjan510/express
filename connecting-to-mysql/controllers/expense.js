const Expense = require('../models/expense');

exports.getExpenseList = (req, res, next) => {
  Expense.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.addExpense = (req, res, next) => {
  const expenseType = req.body.expenseType;
  const expenseAmount = req.body.expenseAmount;
  const description = req.body.description;

  Expense.create({
    amount: expenseAmount,
    category: expenseType,
    description: description,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteExpense = (req, res, next) => {
  const expenseId = +req.params.expenseId;

  Expense.destroy({
    where: {
      id: expenseId,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateExpense = (req, res, next) => {
  const expenseType = req.body.expenseType;
  const expenseAmount = req.body.expenseAmount;
  const description = req.body.description;
  const expenseId = +req.params.expenseId;

  Expense.update(
    {
      amount: expenseAmount,
      category: expenseType,
      description: description,
    },
    {
      where: {
        id: expenseId,
      },
    }
  )
    .then(() => {
      res.json({
        amount: expenseAmount,
        category: expenseType,
        description: description,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
