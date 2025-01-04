import React from "react";
import { navlist } from "@/lib/navlist";
import Image from "next/image";
import google from "@/public/google.png";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { signOut } from "@/lib/sign-out";
const Navbar = async () => {
  const session = await auth();
  if (!session) {
    redirect("/signIn");
  }
  console.log(session.user?.image);
  return (
    <div className="flex w-full flex-row justify-between fixed p-3 items-center">
      <div>
        <Image
          src={session.user?.image}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      {
        <ul className="flex flex-row gap-3">
          {navlist.map((item, i) => (
            <Link href={item.href} key={i}>
              <li className="sm:text-2xl hover:text-blue-500 font-extrabold">
                {item.name}
              </li>
            </Link>
          ))}
          <form action={signOut}>
            <li className="sm:text-2xl hover:text-blue-500 font-extrabold">
              <button type="submit">{session ? "Sign Out" : "Sign In"}</button>
            </li>
          </form>
        </ul>
      }
    </div>
  );
};

export default Navbar;
