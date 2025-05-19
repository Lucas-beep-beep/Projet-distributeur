// src/app/api/louer/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Stock from "@/models/stock";

export async function POST(req: NextRequest) {
  try {
    const { quantity } = await req.json();

    await dbConnect();

    let stock = await Stock.findOne();
    if (!stock) {
      stock = await Stock.create({ total: quantity });
    } else {
      stock.total += quantity;
      await stock.save();
    }

    return NextResponse.json({ message: `Ajouté ${quantity} jeu(x). Total: ${stock.total}` });
  } catch (error) {
    console.error("Erreur dans /api/louer:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
