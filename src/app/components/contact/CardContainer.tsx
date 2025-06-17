import { motion } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

type CardContainerProps = {
  inView: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  done: boolean;
  loading: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
};

export default function CardContainer({
  inView,
  handleSubmit,
  done,
  loading,
  containerRef,
}: CardContainerProps) {
  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xs sm:max-w-md md:max-w-lg min-h-[400px] sm:min-h-[520px] md:min-h-[590px] mx-auto mt-12 sm:mt-20 px-2 sm:px-4"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="w-full h-full min-h-[400px] sm:min-h-[520px] md:min-h-[590px]"
        style={{
          transformStyle: "preserve-3d",
          position: "relative",
        }}
        animate={{
          rotateY: inView ? 0 : 180,
        }}
        initial={{ rotateY: 180 }}
        transition={{
          duration: 2,
          type: "spring",
          bounce: 0.08,
        }}
      >
        {/* 앞면 */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
          }}
        >
          <CardFront handleSubmit={handleSubmit} done={done} loading={loading} />
        </div>
        {/* 뒷면 */}
        <div
          className="absolute inset-0"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            MozBackfaceVisibility: "hidden",
          }}
        >
          <CardBack />
        </div>
      </motion.div>
    </div>
  );
}
