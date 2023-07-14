import Image from "next/image";
import Button from "./button";
import { User2, AlignJustify } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="w-full px-10 py-6 flex justify-between items-center ">
      <div className="flex gap-8">
        <AlignJustify />
        <Image src="/uber-logo.svg" alt="logo" width={120} height={120} />
      </div>
      <div className="flex gap-3 ">
        <Button className="bg-white drop-shadow-sm  text-black hover:bg-slate-400 flex items-center">
          <User2 />
          <span>Log in</span>
        </Button>
        <Button>Sign up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
