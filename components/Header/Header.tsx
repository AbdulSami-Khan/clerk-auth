import React from "react";
import { UserResource } from "@clerk/types";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
interface HeaderProps {
  user: UserResource | null | undefined;
}
const Header = ({ user }: HeaderProps) => {
  return (
    <div className="bg-slate-800 text-white shadow-lg h-[200px] flex justify-between py-5 px-5 items-center">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-2">
        <Link href="/profile">
          <h1>{user?.username}</h1>
        </Link>
        <UserButton afterSignOutUrl="/"/>
      </div>
    </div>
  );
};

export default Header;
