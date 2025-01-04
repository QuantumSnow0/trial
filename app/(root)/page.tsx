import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const HOME = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signIn");
  }
  return (
    <section className="flex flex-1 w-full min-h-screen items-center justify-center">
      <h1 className="text-3xl text-white">Your name is {session.user?.name}</h1>
    </section>
  );
};

export default HOME;
