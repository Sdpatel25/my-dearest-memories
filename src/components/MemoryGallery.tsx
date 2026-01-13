import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface Memory {
  id: number;
  image: string;
  caption: string;
}

interface MemoryGalleryProps {
  memories: Memory[];
}

const MemoryGallery = ({ memories }: MemoryGalleryProps) => {
  return (
    <section className="py-20 px-4 bg-gradient-blush">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Memory Lane
          </h2>
          <p className="text-muted-foreground text-lg">
            Our precious moments together 💕
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {memories.map((memory, index) => (
                <CarouselItem
                  key={memory.id}
                  className="pl-2 md:pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    initial={{ opacity: 0, rotate: -3 }}
                    whileInView={{ opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-2"
                  >
                    {/* Polaroid Frame */}
                    <div className="bg-card rounded-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:rotate-1">
                      <div className="p-3 pb-0">
                        <div className="relative aspect-square overflow-hidden bg-muted">
                          <img
                            src={memory.image}
                            alt={memory.caption}
                            className="w-full h-full object-cover"
                          />
                          {/* Subtle overlay for aged look */}
                          <div className="absolute inset-0 bg-gradient-to-br from-rose/5 to-gold/10 pointer-events-none" />
                        </div>
                      </div>
                      <div className="p-4 pt-3 text-center">
                        <p className="font-serif text-sm text-muted-foreground italic">
                          {memory.caption}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-card border-border hover:bg-rose-light" />
            <CarouselNext className="hidden md:flex -right-12 bg-card border-border hover:bg-rose-light" />
          </Carousel>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground text-sm mt-6 md:hidden"
        >
          Swipe to explore more memories →
        </motion.p>
      </div>
    </section>
  );
};

export default MemoryGallery;
