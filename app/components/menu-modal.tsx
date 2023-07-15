"use client";

import Button from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import { BiLogoAndroid } from "react-icons/bi";
interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<ModalProps> = ({ isModalOpen, onClose }) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <Button className="w-[200px] rounded-[10px]">Sign up</Button>
          <Button className="w-[200px] rounded-[10px] bg-[#eee] text-black">
            Log in
          </Button>
          <div className="flex flex-col items-start text-sm space-y-3">
            <Link href="#">Create a business account</Link>
            <Link href="#">Add your restaurant</Link>
            <Link href="#">Sign up to deliver</Link>
          </div>
        </DialogHeader>

        <div className="flex">
          <Image src="/Uber-Eats.svg" alt="logo" width={100} height={100} />
          <h4>
            There's more to love in <br /> the app.
          </h4>
        </div>
        <DialogFooter>
          <div className="flex gap-3">
            <Button
              type="submit"
              className="bg-[#eee] rounded-[20px] text-black outline-none"
            >
              <div className="flex justify-center items-center">
                <AiFillApple /> <p className="text-sm">iPhone</p>
              </div>
            </Button>
            <Button
              type="submit"
              className="bg-[#eee] rounded-[20px] text-black"
            >
              <div className="flex justify-center items-center">
                <BiLogoAndroid /> <p className="text-sm">Android</p>
              </div>
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
