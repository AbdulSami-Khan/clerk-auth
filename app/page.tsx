import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center gap-8 items-center font-bold h-screen">
      <h1 className="text-5xl">Home</h1>
      <Button asChild>
        <Link href="/dashboard">DashBoard</Link>
      </Button>
    </div>
  );
};

export default page;
