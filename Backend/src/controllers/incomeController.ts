import { Request, Response } from 'express';
import Income from '../models/Income';

// @desc Get all incomes
export const getIncomes = async (req: Request, res: Response) => {
  try {
    const incomes = await Income.find({ userId: req.user?.id });
    res.status(200).json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Add a new income
export const addIncome = async (req: Request, res: Response) => {
  const { source, amount, date } = req.body;

  try {
    const income = new Income({
      userId: req.user?.id,
      source,
      amount,
      date,
    });

    const savedIncome = await income.save();
    res.status(201).json(savedIncome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Update an income
export const updateIncome = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const updatedIncome = await Income.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc Delete an income
export const deleteIncome = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await Income.findByIdAndDelete(id);
    res.status(200).json({ message: 'Income deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
