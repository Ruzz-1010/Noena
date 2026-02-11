"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import TextFooter from "@/components/TextFooter";
import PhotoPairGame from "../components/PhotoPairGame";
import ValentinesProposal from "@/components/ValentinesProposal";

const ANIM_DURATION = 1.5; // Reduced for mobile

export default function Home() {
  const [showValentinesProposal, setShowValentinesProposal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleShowProposal = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowValentinesProposal(true);
    }, ANIM_DURATION * 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative px-2 sm:px-4 md:px-10 overflow-hidden">
      {!showValentinesProposal ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isTransitioning ? 0 : 1 }}
          transition={{ duration: ANIM_DURATION }}
          className="w-full h-full"
        >
          <PhotoPairGame handleShowProposal={handleShowProposal} />
          <TextFooter />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: ANIM_DURATION }}
          className="w-full h-full"
        >
          <ValentinesProposal />
        </motion.div>
      )}
    </div>
  );
}