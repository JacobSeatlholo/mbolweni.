"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const MenuModal: React.FC<ModalProps> = ({
  isModalOpen,
  onClose,
  children,
}) => {
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>sddf</DialogHeader>
        <div>{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default MenuModal;
