"use client";

import MenuModal from "@/app/components/menu-modal";
import React, { useState, useEffect } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <MenuModal />
    </>
  );
};

export default ModalProvider;
