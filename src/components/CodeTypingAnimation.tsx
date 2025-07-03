import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CodeTypingAnimation = () => {
  //   const codeLines = [
  //     "const createPortfolio = () => {",
  //     "  return {",
  //     "    skills: ['React', 'Framer Motion', 'Node.js'],",
  //     "    projects: 12,",
  //     "    yearsExperience: 3,",
  //     "    hireable: true",
  //     "  };",
  //     "};"
  //   ];

  const codeLines = [
    "Specialized in :",
    "=> React.js | Next.js | Node.js",
    "=> And Modern Web Technologies,",
    "=> Delivering Scalable Solutions.",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const cursorVariants: Variants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 0.5,
      },
    },
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className="bg-gray-900 p-3 sm:p-4 md:p-5 rounded-lg w-[90vw] sm:w-[80vw] md:max-w-3xl mx-auto shadow-xl overflow-x-auto"
    >
      <motion.div
        className="text-gray-100 relative font-mono text-sm md:text-base"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className="flex mb-1 whitespace-pre min-w-max"
            variants={lineVariants}
          >
            <span className="text-gray-500 w-6 sm:w-8 select-none">
              {index + 1}
            </span>
            <span className="ml-1 sm:ml-2">{line}</span>
            {index === codeLines.length - 1 && (
              <motion.span
                className="inline-block w-1.5 h-4 sm:w-2 sm:h-5 bg-gray-100 ml-1"
                variants={cursorVariants}
                animate="blink"
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CodeTypingAnimation;
