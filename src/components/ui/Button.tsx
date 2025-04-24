import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
}

export const Button = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'px-6 py-2 rounded-full font-medium transition-all duration-200';
  const variants = {
    primary: 'bg-secondary text-white hover:bg-secondary/90',
    secondary: 'bg-primary text-white hover:bg-primary/90',
    outline: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}; 