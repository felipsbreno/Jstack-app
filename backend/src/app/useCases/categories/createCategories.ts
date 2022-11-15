import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  try {
    const { name, icon } = req.body;

    const categoryExist = await Category.findOne({
      name,
    });

    if (categoryExist) {
      return res.json({ message: 'This category already exist.' });
    }

    const category = await Category.create({ name, icon });
    return res.status(201).json(category);
  } catch (err) {
    res.status(404).json({
      message: 'Error => ' + err,
    });
  }
}
