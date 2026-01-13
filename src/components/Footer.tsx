import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface FooterProps {
  creatorName: string;
}

const Footer = ({ creatorName }: FooterProps) => {
  return (
    <footer className="py-12 px-4 bg-gradient-blush border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground"
        >
          <span className="text-lg">Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-5 h-5 text-primary fill-primary" />
          </motion.div>
          <span className="text-lg">by</span>
          <span className="font-display text-lg font-semibold text-foreground">
            {creatorName}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-sm text-muted-foreground/70"
        >
          Wishing you endless joy and happiness 🌸
        </motion.p>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-2 mt-6"
        >
          {["🌷", "✨", "💕", "✨", "🌷"].map((emoji, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="text-lg"
            >
              {emoji}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
