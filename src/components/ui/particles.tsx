"use client";

import { cn } from "@/lib/utils";
import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useRef,
  useState,
} from "react";

interface MousePosition {
  x: number;
  y: number;
}

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

interface ParticlesProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffff",
  vx = 0,
  vy = 0,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mousePosition = useMousePosition(); // ✅ Renamed function
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
  const rafID = useRef<number | null>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      resizeTimeout.current = setTimeout(() => {
        initCanvas();
      }, 200);
    };

    window.addEventListener("resize", handleResize);
    
    return () => {
      if (rafID.current != null) {
        window.cancelAnimationFrame(rafID.current);
      }
      if (resizeTimeout.current) {
        clearTimeout(resizeTimeout.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [color]); // ✅ Properly closed useEffect function

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  return (
    <div
      className={cn("pointer-events-none", className)}
      ref={canvasContainerRef}
      aria-hidden="true"
      {...props}
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
};
