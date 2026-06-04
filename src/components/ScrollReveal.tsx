import { type ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms for staggering
  direction?: "up" | "left" | "right";
}

const directionStyles = {
  up: "translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

export function ScrollReveal({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // ms between each child
  baseDelay?: number;
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  baseDelay = 0,
}: StaggerContainerProps) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();
  const items = Array.isArray(children) ? children : [children];

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          className={cn(
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          )}
          style={{ transitionDelay: `${baseDelay + i * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
