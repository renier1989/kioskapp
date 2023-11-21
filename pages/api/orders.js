import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  // SECTION TO GET THE ORDERS
  
  const orders = await prisma.order.findMany({
    where:{
        state:  false
    }
  })

  res.status(200).json(orders);

  // SECTION TO CREATE ORDERS
  if (req.method === "POST") {
    const { total, order, name, date } = req.body;

    const orderDB = await prisma.order.create({
      data: {
        name,
        total,
        date,
        order,
      },
    });
    res.status(200).json({ orderDB });
  }
}
