import { Request, Response } from 'express';
import Expense from '../models/Expenses';

// @desc Get all expenses
export const getExpenses = async (req: Request, res: Response) => {
  try {
    const expenses = await Expense.find({ userId: req.user?.id });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Add a new expense
export const addExpense = async (req: Request, res: Response) => {
  const { category, amount, date, description } = req.body;

  try {
    const expense = new Expense({
      userId: req.user?.id,
      category,
      amount,
      date,
      description,
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error: unknown) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update an expense
export const updateExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete an expense
export const deleteExpense = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Expense.findByIdAndDelete(id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
