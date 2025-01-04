"use server";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export async function action() {
  await signIn("google", { redirectTo: "/" });
}
