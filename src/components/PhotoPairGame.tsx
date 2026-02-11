"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

// 18 images
const images = [
  "/game-photos/1.jpg",
  "/game-photos/2.jpg",
  "/game-photos/3.jpg",
  "/game-photos/4.jpg",
  "/game-photos/5.jpg",
  "/game-photos/6.jpg",
  "/game-photos/7.jpg",
  "/game-photos/8.jpg",
  "/game-photos/9.jpg",
  "/game-photos/10.jpg",
  "/game-photos/11.jpg",
  "/game-photos/12.jpg",
  "/game-photos/13.jpg",
  "/game-photos/14.jpg",
  "/game-photos/15.jpg",
  "/game-photos/16.jpg",
  "/game-photos/17.jpg",
  "/game-photos/18.jpg",
];

// Create 18 pairs of images (36 images in total)
const imagePairs = images.flatMap((image) => [image, image]);

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const heartLayout = [
  [null, null, 0, 1, null, 2, 3, null, null],
  [null, 4, 5, 6, 7, 8, 9, 10, null],
  [11, 12, 13, 14, 15, 16, 17, 18, 19],
  [null, 20, 21, 22, 23, 24, 25, 26, null],
  [null, null, 27, 28, 29, 30, 31, null, null],
  [null, null, null, 32, 33, 34, null, null, null],
  [null, null, null, null, 35, null, null, null, null],
];

type ValentinesProposalProps = {
  handleShowProposal: () => void;
};

// Realistic Tulip Component with proper botanical structure
const RealisticTulip = ({ 
  delay = 0, 
  position = "left", 
  customLeft = "5%", 
  customRight = "5%",
  height = "h-32 sm:h-36 md:h-40",
  petalColor = "pink",
  bloomStage = 1 // 0 = bud, 1 = half bloom, 2 = full bloom
}: { 
  delay?: number; 
  position?: string; 
  customLeft?: string;
  customRight?: string;
  height?: string;
  petalColor?: "pink" | "red" | "white" | "yellow" | "purple";
  bloomStage?: number;
}) => {
  
  // Realistic tulip color palettes
  const tulipColors = {
    pink: {
      outer: "from-pink-300 to-pink-400",
      inner: "from-pink-200 to-pink-300",
      base: "from-pink-400 to-pink-600",
      edge: "rose-200",
      stem: "from-green-600 to-green-700",
      leaf: "from-green-500 to-green-600",
      highlight: "pink-100"
    },
    red: {
      outer: "from-red-400 to-red-600",
      inner: "from-red-300 to-red-500",
      base: "from-red-600 to-red-700",
      edge: "red-200",
      stem: "from-green-600 to-green-800",
      leaf: "from-green-600 to-green-700",
      highlight: "red-100"
    },
    white: {
      outer: "from-gray-100 to-gray-200",
      inner: "from-white to-gray-100",
      base: "from-gray-200 to-gray-300",
      edge: "gray-50",
      stem: "from-green-500 to-green-700",
      leaf: "from-green-500 to-green-600",
      highlight: "white"
    },
    yellow: {
      outer: "from-yellow-200 to-yellow-400",
      inner: "from-yellow-100 to-yellow-300",
      base: "from-yellow-400 to-yellow-600",
      edge: "yellow-100",
      stem: "from-green-500 to-green-700",
      leaf: "from-green-500 to-green-600",
      highlight: "yellow-50"
    },
    purple: {
      outer: "from-purple-300 to-purple-500",
      inner: "from-purple-200 to-purple-400",
      base: "from-purple-500 to-purple-700",
      edge: "purple-200",
      stem: "from-green-600 to-green-800",
      leaf: "from-green-600 to-green-700",
      highlight: "purple-100"
    }
  };

  const colors = tulipColors[petalColor];
  const stemHeight = height === "h-32 sm:h-36 md:h-40" ? "h-24 sm:h-28 md:h-32" : 
                    height === "h-28 sm:h-32 md:h-36" ? "h-20 sm:h-24 md:h-28" : 
                    "h-16 sm:h-20 md:h-24";

  return (
    <motion.div
      className={`absolute bottom-0 ${height} w-16 sm:w-20 md:w-24`}
      style={{ 
        [position]: position === "left" ? customLeft : customRight,
        transformOrigin: "bottom center",
        zIndex: 5
      }}
      initial={{ rotate: 0 }}
      animate={{ 
        rotate: [-0.8, 0.8, -0.6, 0.9, -0.7, 0.5, -0.4, 0.3, 0],
        x: [-1, 1, -0.8, 1.2, -0.9, 0.7, -0.5, 0.4, 0]
      }}
      transition={{
        duration: 12,
        delay: delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.85, 0.95, 1]
      }}
    >
      {/* Main Stem - Realistic curved shape */}
      <motion.div 
        className={`absolute bottom-0 left-1/2 w-1.5 sm:w-2 ${stemHeight} rounded-full`}
        style={{ 
          x: "-50%",
          background: `linear-gradient(to top, ${colors.stem.split(" ")[1]}, ${colors.stem.split(" ")[3]})`,
          boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), inset 0 1px 2px rgba(255,255,255,0.3)"
        }}
        animate={{ 
          rotate: [0.3, -0.3, 0.2, -0.4, 0.3, -0.2, 0.1, -0.1, 0],
          x: ["-50%", "-52%", "-48%", "-51%", "-49%", "-50%", "-51%", "-49%", "-50%"]
        }}
        transition={{
          duration: 10,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Stem Details - Nodes and texture */}
      <motion.div 
        className={`absolute bottom-[30%] left-1/2 w-2 sm:w-2.5 h-1.5 sm:h-2 rounded-full`}
        style={{ 
          x: "-50%",
          background: `radial-gradient(circle, ${colors.stem.split(" ")[3]}, ${colors.stem.split(" ")[1]})`,
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.2)"
        }}
        animate={{ y: [0, -1, 0, 1, 0] }}
        transition={{ duration: 8, delay: delay, repeat: Infinity }}
      />
      
      {/* Main Leaf - Left side (realistic shape) */}
      <motion.div 
        className={`absolute bottom-[40%] left-1/2 w-4 sm:w-5 md:w-6 h-10 sm:h-12 md:h-14 rounded-tl-full rounded-tr-3xl rounded-br-full`}
        style={{ 
          x: "-80%",
          y: "10%",
          background: `linear-gradient(135deg, ${colors.leaf.split(" ")[1]}, ${colors.leaf.split(" ")[3]})`,
          boxShadow: "inset -2px -2px 4px rgba(0,0,0,0.1), inset 2px 2px 4px rgba(255,255,255,0.3)",
          transform: "rotate(-25deg) skewX(-5deg)",
          borderBottomRightRadius: "60% 40%",
          borderTopLeftRadius: "100% 60%",
          borderTopRightRadius: "60% 40%"
        }}
        animate={{ 
          rotate: [-28, -22, -26, -24, -27, -23, -25, -24, -25],
          x: ["-80%", "-82%", "-78%", "-81%", "-79%", "-80%", "-81%", "-79%", "-80%"],
          y: ["10%", "12%", "8%", "11%", "9%", "10%", "11%", "9%", "10%"]
        }}
        transition={{
          duration: 14,
          delay: delay + 0.8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Leaf veins */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-1/2 border-b border-green-800 transform rotate-12"></div>
          <div className="w-full h-1/2 border-t border-green-800 transform -rotate-12 mt-1"></div>
        </div>
      </motion.div>
      
      {/* Secondary Leaf - Right side */}
      <motion.div 
        className={`absolute bottom-[35%] left-1/2 w-3.5 sm:w-4.5 md:w-5.5 h-8 sm:h-10 md:h-12 rounded-tr-full rounded-tl-3xl rounded-bl-full`}
        style={{ 
          x: "-20%",
          y: "15%",
          background: `linear-gradient(225deg, ${colors.leaf.split(" ")[1]}, ${colors.leaf.split(" ")[3]})`,
          boxShadow: "inset 2px -2px 4px rgba(0,0,0,0.1), inset -2px 2px 4px rgba(255,255,255,0.3)",
          transform: "rotate(35deg) skewX(5deg)",
          borderBottomLeftRadius: "60% 40%",
          borderTopRightRadius: "100% 60%",
          borderTopLeftRadius: "60% 40%"
        }}
        animate={{ 
          rotate: [32, 38, 34, 36, 33, 37, 35, 36, 35],
          x: ["-20%", "-18%", "-22%", "-19%", "-21%", "-20%", "-19%", "-21%", "-20%"],
          y: ["15%", "13%", "17%", "14%", "16%", "15%", "14%", "16%", "15%"]
        }}
        transition={{
          duration: 13,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Leaf veins */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-1/2 border-b border-green-800 transform -rotate-12"></div>
          <div className="w-full h-1/2 border-t border-green-800 transform rotate-12 mt-1"></div>
        </div>
      </motion.div>

      {/* Flower Head - Realistic tulip bloom */}
      <motion.div 
        className="absolute bottom-[60%] left-1/2 transform -translate-x-1/2"
        style={{ 
          transformOrigin: "bottom center",
          zIndex: 10
        }}
        animate={{ 
          y: [0, -3, 0, -2, 0, -1, 0],
          rotate: [0.5, -0.5, 0.3, -0.4, 0.2, -0.2, 0]
        }}
        transition={{
          duration: 8,
          delay: delay + 0.3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Full Bloom Tulip - 6 petals realistic structure */}
        <div className="relative w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-20">
          
          {/* Back petals (3) */}
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.outer} rounded-t-full rounded-b-sm opacity-70`}
               style={{ transform: "rotate(-10deg) scale(0.95)", boxShadow: "0 8px 12px -4px rgba(0,0,0,0.2)" }}>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.outer} rounded-t-full rounded-b-sm opacity-60`}
               style={{ transform: "rotate(15deg) scale(0.9)", boxShadow: "0 8px 12px -4px rgba(0,0,0,0.2)" }}>
          </div>
          <div className={`absolute inset-0 bg-gradient-to-t ${colors.outer} rounded-t-full rounded-b-sm opacity-50`}
               style={{ transform: "rotate(25deg) scale(0.85)", boxShadow: "0 8px 12px -4px rgba(0,0,0,0.2)" }}>
          </div>
          
          {/* Main petals (3) - Inner bloom */}
          <div className={`absolute bottom-0 left-1/2 w-10 h-12 sm:w-12 sm:h-14 md:w-14 md:h-16 bg-gradient-to-t ${colors.inner} rounded-t-full rounded-b-lg shadow-xl`}
               style={{ transform: "translateX(-50%)", boxShadow: "inset 0 -4px 6px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.15)" }}>
            
            {/* Petal details */}
            <div className={`absolute top-2 left-1/2 w-4 h-3 bg-${colors.highlight} opacity-40 rounded-full`}
                 style={{ transform: "translateX(-50%) rotate(-10deg)" }}></div>
            <div className={`absolute top-4 left-1/2 w-3 h-2 bg-${colors.highlight} opacity-30 rounded-full`}
                 style={{ transform: "translateX(-50%) rotate(5deg)" }}></div>
            
            {/* Petal edges */}
            <div className={`absolute inset-x-0 top-0 h-1 bg-${colors.edge} opacity-40 rounded-t-full`}></div>
            
            {/* Color gradient spots */}
            <div className="absolute bottom-2 left-2 w-2 h-3 bg-yellow-800 opacity-20 rounded-full"></div>
            <div className="absolute bottom-1 right-2 w-1.5 h-2 bg-yellow-800 opacity-20 rounded-full"></div>
          </div>
          
          {/* Left side petal */}
          <div className={`absolute bottom-1 -left-2 w-5 h-10 sm:w-6 sm:h-12 md:w-7 md:h-14 bg-gradient-to-tr ${colors.inner} rounded-tl-full rounded-br-full rounded-tr-lg`}
               style={{ transform: "rotate(-35deg)", boxShadow: "-4px 4px 8px rgba(0,0,0,0.1)" }}>
            <div className={`absolute top-2 right-1 w-2 h-2 bg-${colors.highlight} opacity-40 rounded-full`}></div>
          </div>
          
          {/* Right side petal */}
          <div className={`absolute bottom-1 -right-2 w-5 h-10 sm:w-6 sm:h-12 md:w-7 md:h-14 bg-gradient-to-tl ${colors.inner} rounded-tr-full rounded-bl-full rounded-tl-lg`}
               style={{ transform: "rotate(35deg)", boxShadow: "4px 4px 8px rgba(0,0,0,0.1)" }}>
            <div className={`absolute top-2 left-1 w-2 h-2 bg-${colors.highlight} opacity-40 rounded-full`}></div>
          </div>
          
          {/* Stamen and Pistil - Realistic center */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            {/* Pistil */}
            <div className="w-1 h-3 sm:h-4 bg-gradient-to-t from-green-700 to-green-500 rounded-full mx-auto"></div>
            
            {/* Stamens */}
            <div className="flex space-x-0.5 mt-0.5">
              <div className="w-0.5 h-2 bg-yellow-600 rounded-full transform -rotate-12"></div>
              <div className="w-0.5 h-2.5 bg-yellow-500 rounded-full"></div>
              <div className="w-0.5 h-2 bg-yellow-600 rounded-full transform rotate-12"></div>
            </div>
            
            {/* Pollen */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
              <div className="w-1 h-1 bg-yellow-800 rounded-full"></div>
              <div className="w-0.5 h-0.5 bg-yellow-900 rounded-full absolute -top-0.5 left-0.5"></div>
            </div>
          </div>
          
          {/* Dew drops (morning freshness) */}
          <motion.div 
            className="absolute top-3 left-2 w-1 h-1 bg-white opacity-70 rounded-full"
            animate={{ y: [0, 1, 0], opacity: [0.7, 0.9, 0.7] }}
            transition={{ duration: 4, delay: delay, repeat: Infinity }}
          ></motion.div>
          <motion.div 
            className="absolute top-4 right-3 w-0.5 h-0.5 bg-white opacity-60 rounded-full"
            animate={{ y: [0, 0.5, 0], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 3, delay: delay + 1, repeat: Infinity }}
          ></motion.div>
        </div>
      </motion.div>
      
      {/* Bud variant (if bloomStage = 0) */}
      {bloomStage === 0 && (
        <motion.div 
          className="absolute bottom-[60%] left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 6, delay: delay, repeat: Infinity }}
        >
          <div className="relative w-8 h-12 sm:w-10 sm:h-14 md:w-12 md:h-16">
            <div className={`absolute inset-0 bg-gradient-to-t ${colors.outer} rounded-t-full rounded-b-lg shadow-lg`}
                 style={{ transform: "rotate(-5deg)", clipPath: "ellipse(50% 60% at 50% 40%)" }}>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t ${colors.inner} rounded-t-full rounded-b-lg opacity-80`}
                 style={{ clipPath: "ellipse(45% 55% at 50% 45%)" }}>
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-2 bg-green-600 rounded-full"></div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default function PhotoPairGame({
  handleShowProposal,
}: ValentinesProposalProps) {
  const [gameImages, setGameImages] = useState<string[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [incorrect, setIncorrect] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [floatingPetals, setFloatingPetals] = useState<{ id: number; left: string; delay: number; size: string; rotate: number }[]>([]);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate floating tulip petals
  useEffect(() => {
    const petals = [];
    for (let i = 0; i < (isMobile ? 12 : 25); i++) {
      petals.push({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 10,
        size: `${Math.random() * 20 + 15}px`,
        rotate: Math.random() * 360
      });
    }
    setFloatingPetals(petals);
  }, [isMobile]);

  useEffect(() => {
    // Shuffle the images when the component mounts
    setGameImages(shuffleArray([...imagePairs]));
  }, []);

  const handleClick = async (index: number) => {
    if (selected.length === 2 || matched.includes(index)) return;

    setSelected((prev) => [...prev, index]);

    if (selected.length === 1) {
      const firstIndex = selected[0];
      if (gameImages[firstIndex] === gameImages[index]) {
        setMatched((prev) => [...prev, firstIndex, index]);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
        setIncorrect([firstIndex, index]);
        setTimeout(() => setIncorrect([]), 700);
      }
      setTimeout(() => setSelected([]), 700);
    }
  };

  // Check if game is won
  useEffect(() => {
    if (matched.length === imagePairs.length) {
      handleShowProposal();
    }
  }, [matched, handleShowProposal]);

  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 overflow-hidden relative bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100">
      
      {/* Floating Tulip Petals - Realistic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingPetals.map((petal) => (
          <motion.div
            key={petal.id}
            className="absolute text-pink-200 opacity-30"
            style={{ 
              left: petal.left,
              fontSize: petal.size,
              top: "100%",
              rotate: `${petal.rotate}deg`,
              filter: "drop-shadow(0 4px 3px rgba(0,0,0,0.07))"
            }}
            animate={{
              y: [0, -window.innerHeight - 150],
              x: [0, Math.sin(petal.id) * 50, Math.cos(petal.id) * 30, Math.sin(petal.id) * -40, 0],
              rotate: [petal.rotate, petal.rotate + 180, petal.rotate + 360],
              opacity: [0.2, 0.4, 0.3, 0.2, 0.1, 0]
            }}
            transition={{
              duration: 20 + (petal.id % 10),
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🌷
          </motion.div>
        ))}
      </div>

      {/* Realistic Tulip Garden - Left Side */}
      <RealisticTulip 
        delay={0} 
        position="left" 
        customLeft="2%" 
        petalColor="pink" 
        bloomStage={2}
        height="h-36 sm:h-40 md:h-44"
      />
      <RealisticTulip 
        delay={1.2} 
        position="left" 
        customLeft="8%" 
        petalColor="red" 
        bloomStage={2}
        height="h-32 sm:h-36 md:h-40"
      />
      <RealisticTulip 
        delay={0.7} 
        position="left" 
        customLeft="14%" 
        petalColor="white" 
        bloomStage={1}
        height="h-28 sm:h-32 md:h-36"
      />
      <RealisticTulip 
        delay={1.8} 
        position="left" 
        customLeft="20%" 
        petalColor="purple" 
        bloomStage={2}
        height="h-34 sm:h-38 md:h-42"
      />
      
      {/* Realistic Tulip Garden - Right Side */}
      <RealisticTulip 
        delay={0.4} 
        position="right" 
        customRight="2%" 
        petalColor="yellow" 
        bloomStage={2}
        height="h-36 sm:h-40 md:h-44"
      />
      <RealisticTulip 
        delay={1.5} 
        position="right" 
        customRight="8%" 
        petalColor="pink" 
        bloomStage={2}
        height="h-30 sm:h-34 md:h-38"
      />
      <RealisticTulip 
        delay={0.9} 
        position="right" 
        customRight="14%" 
        petalColor="red" 
        bloomStage={1}
        height="h-28 sm:h-32 md:h-36"
      />
      <RealisticTulip 
        delay={2.0} 
        position="right" 
        customRight="20%" 
        petalColor="white" 
        bloomStage={0}
        height="h-26 sm:h-30 md:h-34"
      />
      
      {/* Background Tulips (smaller, faded) */}
      <RealisticTulip 
        delay={0.5} 
        position="left" 
        customLeft="25%" 
        petalColor="purple" 
        bloomStage={1}
        height="h-24 sm:h-28 md:h-32"
      />
      <RealisticTulip 
        delay={1.1} 
        position="right" 
        customRight="25%" 
        petalColor="pink" 
        bloomStage={1}
        height="h-24 sm:h-28 md:h-32"
      />

      {/* Garden Grass Blades */}
      <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-gradient-to-t from-green-700 to-green-600 opacity-20"
           style={{ 
             backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(34, 197, 94, 0.2) 8px, rgba(34, 197, 94, 0.2) 16px)",
             filter: "blur(2px)"
           }}>
      </div>
      
      {/* Individual Grass Blades */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`grass-${i}`}
            className="absolute bottom-0 w-0.5 h-6 sm:h-8 bg-green-600 opacity-30"
            style={{ 
              left: `${i * 5}%`,
              transform: `rotate(${Math.sin(i) * 10}deg)`,
              transformOrigin: "bottom"
            }}
            animate={{ 
              rotate: [Math.sin(i) * 8, Math.sin(i) * 12, Math.sin(i) * 8],
              height: ["1.5rem", "1.6rem", "1.5rem"]
            }}
            transition={{ duration: 3 + (i % 3), delay: i * 0.1, repeat: Infinity }}
          ></motion.div>
        ))}
      </div>

      {/* Main Game Container - Soft Pink Glassmorphism */}
      <div className="relative z-20 w-full max-w-4xl mx-auto bg-white bg-opacity-70 backdrop-blur-sm rounded-3xl p-4 sm:p-6 shadow-2xl border border-pink-200"
           style={{ boxShadow: "0 20px 40px -12px rgba(219, 39, 119, 0.25)" }}>
        
        {/* Decorative Header with Realistic Tulip Icon */}
        <div className="flex justify-between items-center mb-4 sm:mb-6 px-2">
          <motion.div 
            className="flex items-center space-x-2"
            animate={{ y: [0, -2, 0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-2xl sm:text-3xl filter drop-shadow-lg">🌷</span>
            <div>
              <span className="text-pink-800 font-semibold text-sm sm:text-base">Tulip Memory Garden</span>
              <p className="text-xs text-pink-600">find the matching blooms</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium shadow-lg flex items-center space-x-1"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>{matched.length / 2} / {imagePairs.length / 2}</span>
            <span className="text-pink-200">❤️</span>
          </motion.div>
        </div>

        {/* Game Grid - Heart shaped layout */}
        <div className="grid grid-cols-9 gap-[2px] sm:gap-1 md:gap-2 justify-center">
          {heartLayout.flat().map((index, i) =>
            index !== null ? (
              <motion.div
                key={i}
                className="aspect-square relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(index)}
                style={{ perspective: "1000px" }}
              >
                <div className="w-full h-full">
                  
                  {/* Back of card - Realistic tulip pattern */}
                  {!selected.includes(index) && !matched.includes(index) && (
                    <motion.div
                      className="w-full h-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 rounded-lg sm:rounded-xl shadow-lg absolute inset-0 border-2 border-pink-300"
                      initial={{ rotateY: 0 }}
                      animate={{
                        rotateY: selected.includes(index) || matched.includes(index) ? 180 : 0,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="w-full h-full flex flex-col items-center justify-center p-1 relative overflow-hidden">
                        
                        {/* Watercolor tulip pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="grid grid-cols-2 gap-1 p-1">
                            {[...Array(6)].map((_, j) => (
                              <span key={j} className="text-sm">🌷</span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Main tulip icon */}
                        <span className="text-white text-xl sm:text-2xl md:text-3xl filter drop-shadow-lg">🌷</span>
                        <span className="text-white text-[8px] sm:text-xs mt-1 font-light tracking-wider">
                          TULIP
                        </span>
                        
                        {/* Decorative border */}
                        <div className="absolute inset-1 border border-pink-100 opacity-30 rounded-lg"></div>
                      </div>
                    </motion.div>
                  )}

                  {/* Front of card (image) - with tulip frame */}
                  {(selected.includes(index) || matched.includes(index)) && (
                    <motion.div
                      className="w-full h-full absolute inset-0"
                      initial={{ rotateY: -180 }}
                      animate={{ rotateY: 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden border-2 border-pink-300 shadow-md">
                        <Image
                          src={gameImages[index]}
                          alt={`Memory ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 380px) 40px, (max-width: 640px) 50px, (max-width: 768px) 60px, 80px"
                        />
                        
                        {/* Tulip corner decoration for matched cards */}
                        {matched.includes(index) && (
                          <>
                            <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 bg-pink-500 bg-opacity-80 flex items-center justify-center rounded-br-lg">
                              <span className="text-white text-[8px] sm:text-xs">🌷</span>
                            </div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-pink-500 bg-opacity-80 flex items-center justify-center rounded-tl-lg">
                              <span className="text-white text-[8px] sm:text-xs">❤️</span>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Incorrect match animation - soft pink */}
                  {incorrect.includes(index) && (
                    <motion.div
                      className="absolute inset-0 rounded-lg sm:rounded-xl flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        backgroundColor: [
                          "rgba(251, 207, 232, 0)", 
                          "rgba(251, 207, 232, 0.6)", 
                          "rgba(251, 207, 232, 0)"
                        ]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className="text-pink-600 text-xs sm:text-sm">💔</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ) : (
              <div key={i} className="aspect-square" />
            )
          )}
        </div>

        {/* Romantic Footer with Tulip Message */}
        <motion.div 
          className="mt-6 sm:mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-pink-700 text-xs sm:text-sm italic font-light">
            "Every tulip you match brings us closer to a beautiful surprise..." 
            <span className="text-pink-500 ml-1">🌷💕</span>
          </p>
          
          {/* Romantic progress bar */}
          <div className="w-full max-w-xs mx-auto mt-4 h-1.5 bg-pink-200 rounded-full overflow-hidden shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(matched.length / imagePairs.length) * 100}%` }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ boxShadow: "0 0 8px rgba(236, 72, 153, 0.5)" }}
            />
          </div>
          
          {/* Tulip garden footer */}
          <div className="flex justify-center items-center space-x-3 mt-4 text-pink-400">
            <span className="text-sm">🌷</span>
            <span className="text-xs text-pink-500">planting love, one match at a time</span>
            <span className="text-sm">🌷</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative ground line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-t from-green-800 to-green-600 opacity-20"></div>
    </div>
  );
}