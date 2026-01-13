import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface MessageSectionProps {
  message: string;
}

const MessageSection = ({ message }: MessageSectionProps) => {
  const paragraphs = message.split("\n\n");

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-rose/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block mb-4"
          >
            <Heart className="w-10 h-10 text-primary fill-primary" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Why You Are Special
          </h2>
        </motion.div>

        {/* Glassmorphism message box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-card/60 backdrop-blur-xl rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-rose/20 via-transparent to-gold/10 rounded-2xl" />
          <div className="absolute inset-0 border border-rose/20 rounded-2xl" />
          
          <div className="relative p-8 md:p-12">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-foreground text-lg md:text-xl leading-relaxed mb-6 last:mb-0 font-sans"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-4 mt-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            >
              <Heart
                className="w-6 h-6 text-primary/60 fill-primary/60"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
