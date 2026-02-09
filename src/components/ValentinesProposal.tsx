import { useState, useEffect } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import Fireworks from "@fireworks-js/react";
import Image from "next/image";

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
});

// 36 images
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
  "/game-photos/19.jpg",
  "/game-photos/20.jpg",
  "/game-photos/21.jpg",
  "/game-photos/22.jpg",
  "/game-photos/23.jpg",
  "/game-photos/24.jpg",
  "/game-photos/25.jpg",
  "/game-photos/26.jpg",
  "/game-photos/27.jpg",
  "/game-photos/28.jpg",
  "/game-photos/29.jpg",
  "/game-photos/30.jpg",
  "/game-photos/31.jpg",
  "/game-photos/32.jpg",
  "/game-photos/33.jpg",
  "/game-photos/34.jpg",
  "/game-photos/35.jpg",
  "/game-photos/36.jpg",
];

// Array of begging messages for the "No" button
const beggingMessages = [
  "No, I won't 😢",
  "Please say yes! 😭",
  "Are you sure? 🥺",
  "Think about it! 💔",
  "Give me a chance! 😔",
  "Pretty please? 🥺",
  "I'm begging you! 🙏",
  "Don't break my heart 💔",
  "You're my only one! ❤️",
  "Please reconsider! 😢",
  "My heart will break 💔",
  "Say yes, please! 😭",
  "I'll be so sad 😔",
  "You're my everything! 💕",
  "Don't say no! 😫",
  "I need you! ❤️",
  "Make me happy! 😊",
  "Choose love! 💖",
  "Don't leave me! 😢",
  "Please be mine! 💘",
];

export default function ValentinesProposal() {
  const [step, setStep] = useState(0);
  const [position, setPosition] = useState<{
    top: string;
    left: string;
  } | null>(null);
  const [showFireworks, setShowFireworks] = useState(false);
  const [noButtonTextIndex, setNoButtonTextIndex] = useState(0);
  const [noClickCount, setNoClickCount] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [showRewardButton, setShowRewardButton] = useState(false);

  const getRandomPosition = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;
    return { top: `${randomTop}%`, left: `${randomLeft}%` };
  };

  useEffect(() => {
    if (step < 2) {
      // Change step after 5 seconds
      const timer = setTimeout(() => {
        setStep((prevStep) => prevStep + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
    
    // Show reward button after step 3 animation completes
    if (step === 3) {
      const timer = setTimeout(() => {
        setShowRewardButton(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleYesClick = () => {
    setShowFireworks(true);
    setStep(3);
  };

  const handleNoClick = () => {
    // Move to random position
    setPosition(getRandomPosition());
    
    // Increase click count
    const newClickCount = noClickCount + 1;
    setNoClickCount(newClickCount);
    
    // Change text to begging message
    // Cycle through messages, after the last one, start from the beginning
    const nextIndex = (noButtonTextIndex + 1) % beggingMessages.length;
    setNoButtonTextIndex(nextIndex);
  };

  const handleRewardClick = () => {
    setShowReward(true);
  };

  const handleCloseReward = () => {
    setShowReward(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.h2
            key="step-0"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className} text-center`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            Congratulations! You have completed the game.
          </motion.h2>
        )}
        {step === 1 && (
          <motion.h2
            key="step-1"
            className={`text-4xl font-semibold mb-4 ${playfairDisplay.className} text-center`}
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            I have a surprise for you!
          </motion.h2>
        )}
        {step === 2 && (
          <motion.div
            key="step-2"
            transition={{ duration: 3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center w-full"
          >
            {/* Image Grid Background */}
            <div className="absolute inset-0 grid grid-cols-6 opacity-10">
              {images.slice(0, 36).map((src, index) => (
                <div key={index} className="relative h-full">
                  <Image
                    src={src}
                    alt={`Memory ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="text-center">
              <h2 className={`text-5xl font-semibold mb-8 ${playfairDisplay.className}`}>
                Will you be my Valentine?
              </h2>
              
              {/* Centered Hamster Container */}
              <div className="flex justify-center mb-8">
                <Image
                  src="/sad_hamster.png"
                  alt="Sad Hamster"
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              
              <div className="flex justify-center space-x-4 mt-8 relative min-h-[50px]">
                <button
                  className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl hover:from-pink-600 hover:to-rose-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl z-20"
                  onClick={handleYesClick}
                >
                  Yes, I will! 🥰
                </button>
                <button
                  className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl hover:from-gray-600 hover:to-gray-700 transform hover:scale-95 transition-all duration-300 shadow-lg z-20"
                  style={
                    position
                      ? {
                          position: "absolute",
                          top: position.top,
                          left: position.left,
                          transition: "all 0.3s ease",
                        }
                      : {}
                  }
                  onClick={handleNoClick}
                  onMouseEnter={() => {
                    // Also move on hover, but not change text
                    setPosition(getRandomPosition());
                  }}
                >
                  {beggingMessages[noButtonTextIndex]}
                </button>
              </div>
            </div>
            
            {noClickCount > 0 && (
              <motion.p 
                className="mt-6 text-gray-600 text-sm text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                The "No" button has been clicked {noClickCount} time{noClickCount !== 1 ? 's' : ''}...
                maybe it's trying to tell you something? 😉
              </motion.p>
            )}
          </motion.div>
        )}
        {step === 3 && (
          <motion.div
            key="step-3"
            className={`text-4xl font-semibold mb-4 flex flex-col justify-center items-center w-full ${playfairDisplay.className}`}
            transition={{ duration: 1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center w-full">
              <p className="mb-6">Thank you for accepting, I love you! 💕</p>
              
              {/* Centered Hamster Container */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/hamster_jumping.gif"
                  alt="Happy Hamster"
                  width={200}
                  height={200}
                  unoptimized
                  className="mx-auto"
                />
              </div>
              
              <p className="text-sm text-gray-600 mb-4">For more information, write me!!! 💌</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reward Button - Rendered separately outside AnimatePresence */}
      {showRewardButton && step === 3 && (
        <motion.div
          className="fixed bottom-10 left-0 right-0 flex justify-center z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.5,
            type: "spring", 
            stiffness: 200,
            damping: 15 
          }}
        >
          <button
            onClick={handleRewardClick}
            className="px-8 py-4 text-xl font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-2xl hover:from-purple-600 hover:to-indigo-700 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-3xl animate-pulse cursor-pointer"
          >
            🎁 Click your reward here! 🎁
          </button>
        </motion.div>
      )}

      {/* Reward Modal */}
      <AnimatePresence>
        {showReward && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseReward}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseReward}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl z-40"
              >
                ✕
              </button>
              
              {/* Cat Image */}
              <div className="flex justify-center mb-6">
                <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-2xl mx-auto">
                  {/* You might need to adjust the cat image path */}
                  <Image
                    src="/game-photos/cat.jpg"
                    alt="Reward Cat"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              
              {/* Congratulations Message */}
              <div className="text-center">
                <h3 className={`text-3xl font-bold mb-2 ${playfairDisplay.className}`}>
                  Congratulations! 
                </h3>
                <p className="text-lg text-gray-700 mb-4">
                  Here's a flower for you! 🌸
                </p>
                
                <p className="mt-6 text-gray-600 text-sm">
                  You've made the hamster very happy! 💕
                </p>
              </div>
              
              {/* Close Reward Button */}
              <div className="flex justify-center mt-6">
                <button
                  onClick={handleCloseReward}
                  className="px-6 py-3 text-white bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 cursor-pointer"
                >
                  Close Reward
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fireworks */}
      {showFireworks && (
        <div className="fixed inset-0 z-10">
          <Fireworks
            options={{
              autoresize: true,
              opacity: 0.5,
              acceleration: 1.05,
              friction: 0.97,
              gravity: 1.5,
              particles: 100,
              traceLength: 3,
              traceSpeed: 10,
              explosion: 5,
              intensity: 30,
              flickering: 50,
              lineStyle: 'round',
              hue: {
                min: 0,
                max: 345
              },
              delay: {
                min: 30,
                max: 60
              },
              rocketsPoint: {
                min: 50,
                max: 50
              },
              lineWidth: {
                explosion: {
                  min: 1,
                  max: 3
                },
                trace: {
                  min: 0.1,
                  max: 1
                }
              },
              brightness: {
                min: 50,
                max: 80
              },
              decay: {
                min: 0.015,
                max: 0.03
              },
              mouse: {
                click: true,
                move: false,
                max: 1
              }
            }}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      )}
    </div>
  );
}