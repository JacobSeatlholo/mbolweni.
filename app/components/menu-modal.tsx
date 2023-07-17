"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import Image from "next/image";

import { AiFillApple } from "react-icons/ai";
import { BiLogoAndroid } from "react-icons/bi";
import { useMenuModal } from "@/hooks/use-menu-modal";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<ModalProps> = ({ isModalOpen, onClose }) => {
  const router = useRouter();

  const useModal = useMenuModal();


  return (
    <Dialog open={useModal.isModalOpen} onOpenChange={useModal.onClose}>
      <DialogContent>
        <DialogHeader className="space-y-2">
          <Button
            type="button"
            onClick={() => router.push("/sign-up")}
            className="w-[200px] rounded-[6px] hover:bg-slate-800"
          >
            Sign up
          </Button>

          <Link href="/sign-in">
            <Button className="w-[200px] rounded-[6px] bg-[#eee] text-black hover:bg-[#e2e2e2] font-semibold">
              Log in
            </Button>
          </Link>
          <div className="flex flex-col items-start space-y-3 pt-7 text-xs font-semibold">
            <Link href="#">Create a business account</Link>
            <Link href="#">Add your restaurant</Link>
            <Link href="#">Sign up to deliver</Link>
          </div>
        </DialogHeader>

        <div className="flex relative">
          <div className="absolute flex -bottom-20  items-start gap-2">
            <Image src="/Uber-sm.png" alt="logo" width={60} height={60} />
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
                className="bg-[#eee] hover:bg-[#e2e2e2] rounded-[20px] text-black  w-30 h-8"
              >
                <div className="flex justify-center items-center gap-2 ">
                  <AiFillApple /> <p className="text-sm">iPhone</p>
                </div>
              </Button>
              <Button
                type="submit"
                className="bg-[#eee] hover:bg-[#e2e2e2] rounded-[20px] text-black  w-30 h-8"
              >
                <div className="flex justify-center items-center gap-2">
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
