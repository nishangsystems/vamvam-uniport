import { Children, type ReactNode } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface StaggeredAnimationProps {
  children: ReactNode[];
  animation?: 'slide-left' | 'slide-right' | 'slide-bottom' | 'scale' | 'fade';
  staggerDelay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

const animationClasses = {
  'slide-left': 'animate-slide-in-left',
  'slide-right': 'animate-slide-in-right',
  'slide-bottom': 'animate-slide-in-bottom',
  'scale': 'animate-scale-in',
  'fade': 'animate-fade-in'
};

export const StaggeredAnimation = ({
  children,
  animation = 'slide-bottom',
  staggerDelay = 0.1,
  className = '',
  threshold = 0.2,
  rootMargin = '0px 0px -100px 0px'
}: StaggeredAnimationProps) => {
  const { elementRef, isVisible } = useScrollAnimation({ threshold, rootMargin });
  const animationClass = animationClasses[animation];

  return (
    <div ref={elementRef as any} className={className}>
      {Children.map(children, (child, index) => (
        <div
          className={`${isVisible ? animationClass : 'opacity-0'}`}
          style={{ animationDelay: `${index * staggerDelay}s` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};