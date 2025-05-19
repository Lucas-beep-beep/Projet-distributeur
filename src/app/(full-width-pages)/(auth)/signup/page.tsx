import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page d'inscription | Distributeur boules de pétanques",
  description: "C'est la page d'inscription du distributeur de boules de pétanques ",
  // other metadata
};

export default function SignUp() {
  return <SignUpForm />;
}
