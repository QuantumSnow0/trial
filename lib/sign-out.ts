"use server";
import { signIn } from "@/auth";

export async function signOut() {
  await signIn("google", { redirectTo: "/signIn" });
}
