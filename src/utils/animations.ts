import { useEffect, useState, RefObject } from 'react';

export function useScrollAnimation(ref: RefObject<HTMLElement>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      { threshold }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]);

  return isVisible;
}

export function useParallax(ref: RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const currentRef = ref.current;
    
    const handleScroll = () => {
      if (!currentRef) return;
      
      const scrollTop = window.scrollY;
      const offset = scrollTop * speed;
      
      currentRef.style.transform = `translateY(${offset}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);
}