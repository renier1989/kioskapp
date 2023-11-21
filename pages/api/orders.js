import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient();

  if (req.method === "POST") {
    const {total, order, name, date} = req.body
    
    const orderDB = await prisma.order.create({
        data:{
            name,
            total,
            date,
            order 
        }
    })
        return res.status(200).json({orderDB});
  }
}
