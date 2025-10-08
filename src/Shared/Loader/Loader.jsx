/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#3489BD] via-[#65B0D5] to-[#2E7A7A] text-white z-[9999]">
      {/* Animated circles */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        <motion.div
          className="absolute w-20 h-20 border-4 border-t-transparent border-[#EDF6F8] rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-12 h-12 border-4 border-t-transparent border-[#144D75] rounded-full"
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-[#EDF6F8] rounded-full"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}
