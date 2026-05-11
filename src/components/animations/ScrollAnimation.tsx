import type { ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface ScrollAnimationProps {
  children: ReactNode;
  animation: 'slide-left' | 'slide-right' | 'slide-bottom' | 'scale' | 'fade';
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const animationClasses = {
  'slide-left': 'animate-slide-in-left',
  'slide-right': 'animate-slide-in-right',
  'slide-bottom': 'animate-slide-in-bottom',
  'scale': 'animate-scale-in',
  'fade': 'animate-fade-in'
};

export const ScrollAnimation = ({ 
  children, 
  animation, 
  delay = 0, 
  className = '',
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px',
  triggerOnce = true
}: ScrollAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, rootMargin, triggerOnce });
  
  const animationClass = animationClasses[animation];
  
  return (
    <div
      ref={elementRef as any}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};