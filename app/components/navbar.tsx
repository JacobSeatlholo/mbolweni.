"use client";

import Image from "next/image";
import Button from "@/components/ui/button";
import { User2, AlignJustify } from "lucide-react";
import { useMenuModal } from "@/hooks/use-menu-modal";
import MenuModal from "./menu-modal";

const NavBar = () => {
  const { onOpen } = useMenuModal();
  return (
    <nav className="w-full px-10 py-6 flex justify-between items-center ">
      <div className="flex gap-8">
        <AlignJustify onClick={onOpen} />
        <MenuModal isModalOpen />
        <Image src="/uber-logo.svg" alt="logo" width={120} height={120} />
      </div>
      <div className="flex gap-3 ">
        <Button className="bg-white drop-shadow-sm  text-black hover:bg-slate-200 flex items-center">
          <User2 />
          <span>Log in</span>
        </Button>
        <Button className="hover:bg-slate-700">Sign up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
