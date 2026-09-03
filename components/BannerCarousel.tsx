import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
const BannerCarousel = ({
  banners,
  currentIndex,
  onHover,
}: {
  banners: StaticImageData[];
  currentIndex: number;
  onHover: (paused: boolean) => void;
}) => {
  return (
    <div
      className="relative aspect-video overflow-hidden rounded-xl border border-border shadow-sm"
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={banners[currentIndex]}
            alt={`Banner ${currentIndex + 1}`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BannerCarousel;
