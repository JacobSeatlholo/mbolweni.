"use client";

import Image from "next/image";
import Button from "@/components/ui/button";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useMenuModal } from "@/hooks/use-menu-modal";
import MenuModal from "./menu-modal";
import Link from "next/link";

const NavBar = () => {
  const onOpen = useMenuModal((state) => state.onOpen);
  const onClose = useMenuModal((state) => state.onClose);
  const isModalOpen = useMenuModal((state) => state.isModalOpen);
  return (
    <nav className="w-full px-10 py-6 flex justify-between items-center ">
      <div className="flex gap-8">
        <GiHamburgerMenu size={20} onClick={onOpen} />
        {isModalOpen && <MenuModal isModalOpen onClose={onClose} />}
        <Link href="/">
          <Image src="/uber-logo.svg" alt="logo" width={120} height={120} />
        </Link>
      </div>
      <div className="flex gap-3">
        <Link href="/sign-in">
          <Button className="bg-white drop-shadow-sm  text-black hover:bg-slate-200 flex items-center space-x-1 ">
            <BsFillPersonFill size={20} />
            <span> Log in</span>
          </Button>
        </Link>
        <Link href="sign-up">
          <Button className="hover:bg-slate-700">Sign up</Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
