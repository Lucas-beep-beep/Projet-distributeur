// src/app/api/rendre/route.ts
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Stock from "@/models/stock";

export async function POST(req: NextRequest) {
  try {
    const { quantity } = await req.json();

    await dbConnect();

    const stock = await Stock.findOne();
    if (!stock || stock.total < quantity) {
      return NextResponse.json({ error: "Pas assez de jeux à rendre" }, { status: 400 });
    }

    stock.total -= quantity;
    await stock.save();

    return NextResponse.json({ message: `Retiré ${quantity} jeu(x). Reste: ${stock.total}` });
  } catch (error) {
    console.error("Erreur dans /api/rendre:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

