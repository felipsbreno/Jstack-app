import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find();
    return res.json(orders);
  } catch (err) {
    res.status(404).json({
      message: 'Error => ' + err,
    });
  }
}
