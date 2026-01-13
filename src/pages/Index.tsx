import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import MemoryGallery from "@/components/MemoryGallery";
import MessageSection from "@/components/MessageSection";
import CakeSection from "@/components/CakeSection";
import Footer from "@/components/Footer";

// ========================================
// CUSTOMIZE YOUR BIRTHDAY WEBSITE HERE
// ========================================

const FRIEND_NAME = "Sarah"; // Change to your friend's name
const CREATOR_NAME = "Your Name"; // Change to your name

// Add your photos here - replace with your own image URLs
const MEMORIES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop",
    caption: "That amazing trip we took ✨",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=400&fit=crop",
    caption: "Coffee dates & endless laughs ☕",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=400&h=400&fit=crop",
    caption: "Beach days together 🌊",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop",
    caption: "Adventures with you 🌿",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=400&h=400&fit=crop",
    caption: "Making memories 💕",
  },
];

// Write your heartfelt message here
const BIRTHDAY_MESSAGE = `Dear ${FRIEND_NAME},

Today is all about celebrating YOU - the most amazing, beautiful, and wonderful person I'm blessed to call my best friend.

From the moment we met, you've brought so much joy, laughter, and love into my life. Your kindness knows no bounds, your smile lights up every room, and your heart is as pure as gold.

You've been there through my highest highs and lowest lows, always knowing exactly what to say. You're not just a friend - you're family, a sister, and my person.

On your special day, I want you to know how incredibly loved you are. May this year bring you all the happiness, success, and adventures you deserve. Dream big, laugh often, and never forget how extraordinary you are.

Here's to more memories, more adventures, and more years of this beautiful friendship. I love you to the moon and back! 🌙

Happy Birthday, superstar! 🎂✨`;

// ========================================

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    setShowContent(true);
    setTimeout(() => {
      contentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section - Always visible */}
      <HeroSection friendName={FRIEND_NAME} onStart={handleStart} />

      {/* Content sections - Revealed after start */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            ref={contentRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <MemoryGallery memories={MEMORIES} />
            <MessageSection message={BIRTHDAY_MESSAGE} />
            <CakeSection />
            <Footer creatorName={CREATOR_NAME} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Install prompt hint for PWA */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-auto z-50"
        >
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-lg text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              📱 Add to home screen for the full experience!
            </p>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Index;
