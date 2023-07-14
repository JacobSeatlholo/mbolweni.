import Image from "next/image";
import Button from "./button";
import { User2 } from "lucide-react";
const NavBar = () => {
  return (
    <nav className="w-full px-10 py-7 flex justify-between items-center ">
      <div>
        <Image src="/uber-logo.svg" alt="logo" width={150} height={150} />
      </div>
      <div className="flex gap-3 ">
        <Button className="bg-white drop-shadow-sm text-black hover:bg-slate-400 flex items-center">
          <User2 />
          <span className="">Log in</span>
        </Button>

        <Button>Sign up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
