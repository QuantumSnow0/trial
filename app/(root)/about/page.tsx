import Fact from "@/components/Fact";
import React, { Suspense } from "react";
import next from "@/public/next-button.png";

import { SkeletonDemo } from "@/components/SkeletonDemo";
import Button from "@/components/Button";
import Link from "next/link";

const page = () => {
  return (
    <section className="flex flex-1 flex-col w-full min-h-screen items-center justify-center">
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl  text-center underline mb-1">
          Random Facts about Cats
        </h1>
        <Suspense fallback={<SkeletonDemo />}>
          <Fact />
        </Suspense>
      </div>
      <Link href="/about">
        <Button btnName="Next" className="text-white" icon={next} />
      </Link>
    </section>
  );
};

export default page;
