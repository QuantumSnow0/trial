"use client";
import GoogleSignIn from "@/app/googleSign";
import Button from "@/components/Button";
import OrLine from "@/components/OrLine";
import React, { useActionState } from "react";

const page = () => {
  const handleSubmit = (previousState: unknown, formData: FormData) => {
    console.log(formData.get("username"));
  };
  const [data, formAction, isPending] = useActionState(handleSubmit, undefined);
  return (
    <section className="flex min-h-screen flex-col items-center justify-center w-full">
      <div className="div-main">
        <form action={formAction} className="flex flex-col flex-1 gap-2">
          <span className="text-black">Email</span>
          <input
            type="text"
            className="text-black border border-black outline-none p-2 rounded-xl"
            name="email"
            placeholder="email"
          />
          <span className="text-black">Password</span>
          <input
            type="password"
            className="text-black border border-black outline-none p-2 rounded-xl"
            name="password"
            placeholder="password"
          />
          <Button type="submit" btnName="Login" />
          <OrLine />
        </form>
        <GoogleSignIn />
      </div>
    </section>
  );
};

export default page;
