"use client";
import { useState } from "react";

function Rendre() {
  const [nombre, setNombre] = useState<number>(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/rendre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: nombre }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur lors du retour");
      alert(data.message);
  } catch (error: unknown) {
  if (error instanceof Error) {
    alert(error.message); // ← montre l’erreur à l’utilisateur
  }
}

  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
        Rendre des boules de pétanque
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="text-gray-800 dark:text-white">
          Nombre de lots de 3 à rendre :
          <input
            type="number"
            min="1"
            max="6"
            value={nombre}
            onChange={(e) => setNombre(Number(e.target.value))}
            className="block mt-1 p-2 border rounded w-24 mb-2"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Rendre
        </button>
      </form>
    </div>
  );
}

export default Rendre;
