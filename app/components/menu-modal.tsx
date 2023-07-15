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
        <DialogHeader className="space-y-2">
          <Button className="w-[200px] rounded-[6px]">Sign up</Button>
          <Button className="w-[200px] rounded-[6px] bg-[#eee] text-black">
            Log in
          </Button>
          <div className="flex flex-col items-start space-y-3 pt-7 text-xs font-semibold">
            <Link href="#">Create a business account</Link>
            <Link href="#">Add your restaurant</Link>
            <Link href="#">Sign up to deliver</Link>
          </div>
        </DialogHeader>

        <div className="flex relative">
          <div className="absolute flex -bottom-20  items-start">
            <Image src="/Uber-Eats.svg" alt="logo" width={100} height={80} />
            <p className="text-xs font-semibold">
              There's more to love in <br />
              the app.
            </p>
          </div>
        </div>

        <DialogFooter>
          <div>
            <div className="flex gap-3 absolute bottom-0 left-0">
              <Button
                type="submit"
                className="bg-[#eee] rounded-[20px] text-black  w-30 h-10"
              >
                <div className="flex justify-center items-center ">
                  <AiFillApple /> <p className="text-sm">iPhone</p>
                </div>
              </Button>
              <Button
                type="submit"
                className="bg-[#eee] rounded-[20px] text-black w-30 h-10"
              >
                <div className="flex justify-center items-center">
                  <BiLogoAndroid /> <p className="text-sm">Android</p>
                </div>
              </Button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
