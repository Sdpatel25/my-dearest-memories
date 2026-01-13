import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

const CakeSection = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showWish, setShowWish] = useState(false);

  const handleBlowCandles = () => {
    if (!candlesLit) return;

    setCandlesLit(false);

    // Sparkle confetti for wish
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ffd700", "#e879a0", "#f5b0c7", "#fff"],
      });
      setShowWish(true);
    }, 500);
  };

  const resetCake = () => {
    setCandlesLit(true);
    setShowWish(false);
  };

  return (
    <section className="py-20 px-4 bg-gradient-hero relative overflow-hidden">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Make a Wish! 🎂
          </h2>
          <p className="text-muted-foreground text-lg">
            {candlesLit
              ? "Tap the cake to blow out the candles"
              : "The candles are out!"}
          </p>
        </motion.div>

        {/* Interactive Cake */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative inline-block cursor-pointer"
          onClick={handleBlowCandles}
        >
          <div className="relative select-none">
            {/* Cake Base */}
            <div className="relative w-64 h-48 mx-auto">
              {/* Plate */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-8 bg-muted rounded-full" />

              {/* Bottom Layer */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-56 h-16 bg-rose rounded-lg shadow-lg">
                <div className="absolute inset-x-0 top-2 h-3 bg-primary/20 rounded-full mx-4" />
              </div>

              {/* Middle Layer */}
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-44 h-14 bg-rose-light rounded-lg shadow-lg">
                <div className="absolute inset-x-0 top-2 h-3 bg-primary/20 rounded-full mx-3" />
              </div>

              {/* Top Layer */}
              <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-32 h-12 bg-blush rounded-lg shadow-lg">
                <div className="absolute inset-x-0 top-2 h-2 bg-primary/10 rounded-full mx-2" />
              </div>

              {/* Frosting drips */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bottom-16 bg-card rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    width: "12px",
                    height: `${12 + (i % 3) * 6}px`,
                  }}
                />
              ))}

              {/* Candles */}
              <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="relative">
                    {/* Candle stick */}
                    <div className="w-3 h-10 bg-gradient-to-b from-gold-light to-gold rounded-t-full" />
                    {/* Wick */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-foreground/60" />
                    {/* Flame */}
                    <AnimatePresence>
                      {candlesLit && (
                        <motion.div
                          initial={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0, y: -10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute -top-6 left-1/2 -translate-x-1/2"
                        >
                          <motion.div
                            animate={{
                              scaleY: [1, 0.9, 1],
                              scaleX: [1, 1.1, 1],
                            }}
                            transition={{
                              duration: 0.3,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className="w-3 h-5 bg-gradient-to-t from-gold via-gold-light to-primary-foreground rounded-full"
                            style={{
                              filter: "blur(0.5px)",
                              boxShadow: "0 0 10px hsl(45 90% 55% / 0.8)",
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-8">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-gold"
                    style={{ opacity: 0.8 - i * 0.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Glow effect when lit */}
            {candlesLit && (
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full animate-pulse-soft"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(45 90% 55% / 0.3) 0%, transparent 70%)",
                  }}
                />
              </div>
            )}
          </div>

          {/* Tap hint */}
          {candlesLit && (
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mt-4 text-muted-foreground text-sm"
            >
              👆 Tap to blow
            </motion.div>
          )}
        </motion.div>

        {/* Wish Message */}
        <AnimatePresence>
          {showWish && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="mt-8"
            >
              <div className="inline-block bg-card/80 backdrop-blur-sm border border-gold/30 rounded-2xl px-8 py-6 shadow-lg">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-display text-2xl md:text-3xl text-foreground mb-2"
                >
                  ✨ Make a Wish! ✨
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground"
                >
                  May all your dreams come true 💫
                </motion.p>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                onClick={(e) => {
                  e.stopPropagation();
                  resetCake();
                }}
                className="mt-4 text-sm text-muted-foreground hover:text-primary transition-colors underline"
              >
                Light candles again
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CakeSection;
