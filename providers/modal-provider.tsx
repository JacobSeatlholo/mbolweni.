"use client";

//create provider to export modal in server-side component
import MenuModal from "@/app/components/menu-modal";

import React, { useState, useEffect } from "react";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

const ModalProvider: React.FC<ModalProps> = ({ isModalOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);
  //avoid hydration error
  //lifecycle
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MenuModal isModalOpen onClose={onClose} />
    </>
  );
};

export default ModalProvider;
