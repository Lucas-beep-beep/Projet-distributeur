"use client"; // Obligatoire pour utiliser useState et les événements

import { useState } from "react";

export default function Louer() {
  const [nombre, setNombre] = useState<number>(1);

  // 🔽 C'est ici que tu mets ton handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/louer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: nombre }),
    });

    const data = await res.json(); // ✅ Plus besoin de .text() + JSON.parse()

    if (!res.ok) {
      throw new Error(data.error || "Erreur serveur");
    }

    alert(data.message); // ✅ Affiche "Jeux loués avec succès"
  } catch (error: any) {
    console.error("Erreur dans handleSubmit:", error);
    alert(error.message || "Erreur inconnue");
  }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Louer des boules de pétanque</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="text-gray-800 dark:text-white">
          Nombre de lots de 3 à louer :
          <input
            type="number"
            min="1"
            value={nombre}
            onChange={(e) => setNombre(Number(e.target.value))}
            className="block mt-1 p-2 border rounded w-24 mb-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Louer
        </button>
      </form>
    </div>
  );
}
