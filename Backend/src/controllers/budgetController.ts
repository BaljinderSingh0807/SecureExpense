import { Request, Response } from 'express';
import Budget from '../models/Budget';

// @desc Get all budgets
export const getBudgets = async (req: Request, res: Response) => {
  try {
    const budgets = await Budget.find({ userId: req.user?.id });
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Add a new budget
export const addBudget = async (req: Request, res: Response) => {
  const { goal, limit, startDate, endDate } = req.body;

  try {
    const budget = new Budget({
      userId: req.user?.id,
      goal,
      limit,
      startDate,
      endDate,
    });

    const savedBudget = await budget.save();
    res.status(201).json(savedBudget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update a budget
export const updateBudget = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedBudget = await Budget.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedBudget);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete a budget
export const deleteBudget = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Budget.findByIdAndDelete(id);
    res.status(200).json({ message: 'Budget deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
