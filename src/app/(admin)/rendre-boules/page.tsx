"use client";

import Rendre from "./Rendre";
console.log(Rendre); // Doit afficher une fonction, pas "undefined" ou "[object Object]"

export default function Page() {
  return <Rendre />;
}