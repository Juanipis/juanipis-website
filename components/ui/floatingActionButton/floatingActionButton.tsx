import { Button } from "@radix-ui/themes";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "backOut" }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 1000,
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button 
            onClick={scrollToTop}
            size="3"
            style={{
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }}
          >
            <ChevronUpIcon width="24" height="24" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;
