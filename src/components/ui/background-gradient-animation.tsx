"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(0, 80, 80)", // 💡 Top-Left Color (Medium Teal)
  gradientBackgroundEnd = "rgb(10, 50, 40)", // 💡 Bottom-Right Color (Dark Green-Teal)
  firstColor = "0, 150, 150", // 💡 Main Center Spot (Medium Bright Teal - for white text contrast)
  secondColor = "100, 200, 100", // Soft Green
  thirdColor = "50, 200, 200", // Soft Cyan
  fourthColor = "255, 90, 90", // Red (kept for subtle warmth)
  fifthColor = "255, 220, 120", // Yellow (kept for subtle warmth)
  pointerColor = "180, 255, 200", // Light Aqua
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size); 
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  useEffect(() => {
    let animationFrameId: number;
    
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
      setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
      
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;

      animationFrameId = requestAnimationFrame(move);
    }

    animationFrameId = requestAnimationFrame(move);

    return () => cancelAnimationFrame(animationFrameId);
  }, [tgX, tgY, curX, curY]);


  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        // 💡 CHANGE: Linear gradient angle changed from 40deg to 135deg (Top-Left to Bottom-Right)
        "h-screen w-screen relative overflow-hidden top-0 left-0 bg-[linear-gradient(135deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {/* Content wrapper */}
      <div className={cn("relative z-10", className)}>{children}</div>
      
      <div
        className={cn(
          "gradients-container h-full w-full absolute top-0 left-0",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        {/* FIRST GRADIENT (Main Central - High Opacity for contrast) */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`, 
            `animate-first`,
            `opacity-100` 
          )}
        ></div>
        
        {/* SECOND GRADIENT (Lowered Opacity) */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`, 
            `animate-second`,
            `opacity-50` // Kept soft
          )}
        ></div>
        
        {/* THIRD GRADIENT (Lowered Opacity) */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`, 
            `animate-third`,
            `opacity-50` // Kept soft
          )}
        ></div>
        
        {/* FOURTH GRADIENT (Lowered Opacity) */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`, 
            `animate-fourth`,
            `opacity-50` // Kept soft
          )}
        ></div>
        
        {/* FIFTH GRADIENT (Lowered Opacity) */}
        <div
          className={cn(
            `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat]`,
            `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
            `[transform-origin:center_center]`, 
            `animate-fifth`,
            `opacity-50` // Kept soft
          )}
        ></div>

        {/* Interactive Pointer Gradient */}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              `absolute [background:radial-gradient(circle_at_center,_rgba(var(--pointer-color),_0.8)_0,_rgba(var(--pointer-color),_0)_50%)_no-repeat]`,
              `[mix-blend-mode:var(--blending-value)] w-full h-full -top-1/2 -left-1/2`,
              `opacity-50` // Kept soft
            )}
          ></div>
        )}
      </div>
    </div>
  );
};