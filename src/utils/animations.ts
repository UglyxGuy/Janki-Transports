export const fadeIn = (direction: 'up' | 'down' | 'left' | 'right') => {
  return {
    hidden: {
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: 0.15
      }
    }
  };
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const slideIn = (direction: 'up' | 'down' | 'left' | 'right') => {
  return {
    hidden: {
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.8,
        delay: 0.5
      }
    }
  };
}; 