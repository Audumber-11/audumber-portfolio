"use client";

import { useEffect, useState, useCallback, useRef } from "react";

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
): [React.RefCallback<T>, boolean] {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const elementRef = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const refCallback = useCallback(
    (node: T | null) => {
      if (elementRef.current) {
        // Cleanup previous observer - handled by useEffect cleanup
      }
      elementRef.current = node;
    },
    []
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return [refCallback, isIntersecting];
}
