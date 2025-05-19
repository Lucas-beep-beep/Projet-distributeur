import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page de connexion | Distributeur boules de petanques",
  description: "Page Distributeur boules de petanques",
};

export default function SignIn() {
  return <SignInForm />;
}
