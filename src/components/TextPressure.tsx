"use client"
import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const getAttr = (distance: number, maxDist: number, minVal: number, maxVal: number) => {
  const val = maxVal - Math.abs((maxVal * distance) / maxDist);
  return Math.max(minVal, val + minVal);
};

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  className?: string;
  minFontSize?: number;
}

const TextPressure: React.FC<TextPressureProps> = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',

  width = true,
  weight = true,
  italic = true,
  alpha = false,

  flex = true,
  stroke = false,
  scale = false,

  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  className = '',

  minFontSize = 24
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  
  // Cache title width to avoid repeated getBoundingClientRect calls
  const maxDistRef = useRef(0);

  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);

  const chars = text.split('');

  useEffect(() => {
    const container = containerRef.current;
    if(!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      // Relative mouse position from the viewport is fine since dist checks global proximity?
      // Actually dist is between mouseRef and charCenter. 
      // charCenter was derived from getBoundingClientRect() which is viewport-relative.
      // So e.clientX/Y (viewport relative) is correct.
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      const rect = container.getBoundingClientRect();
      cursorRef.current.x = t.clientX;
      cursorRef.current.y = t.clientY;
    };
    
    // Reset cursor when leaving the component to avoid "stuck" effect
    const handleMouseLeave = () => {
        cursorRef.current.x = -9999;
        cursorRef.current.y = -9999;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove, { passive: true } as EventListenerOptions);
    container.addEventListener('mouseleave', handleMouseLeave);

    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      mouseRef.current.x = left + width / 2;
      mouseRef.current.y = top + height / 2;
      cursorRef.current.x = mouseRef.current.x;
      cursorRef.current.y = mouseRef.current.y;
    }

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;

    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();

    let newFontSize = containerW / (chars.length / 2);
    newFontSize = Math.max(newFontSize, minFontSize);

    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);

    requestAnimationFrame(() => {
      if (!titleRef.current) return;
    const textRect = titleRef.current.getBoundingClientRect();
    maxDistRef.current = textRect.width / 2;

    if (scale && textRect.height > 0) {
      const yRatio = containerH / textRect.height;
      setScaleY(yRatio);
      setLineHeight(yRatio);
    }
    
    // Cache span positions after layout update
    setTimeout(() => {
       if(!spansRef.current) return;
       spansRef.current.forEach((span) => {
          if(!span) return;
          const rect = span.getBoundingClientRect();
          span.dataset.centerX = (rect.x + rect.width / 2).toString();
          span.dataset.centerY = (rect.y + rect.height / 2).toString();
       });
    }, 0);
  });
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    setSize();
    const debouncedSetSize = debounce(setSize, 100);
    window.addEventListener('resize', debouncedSetSize);
    return () => window.removeEventListener('resize', debouncedSetSize);
  }, [setSize]);

  useEffect(() => {
    let rafId: number;
    let isRunning = false;

    const animate = () => {
      if (!isRunning) return;

      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;

      if (titleRef.current) {
        // Use cached maxDist to avoid forced reflow
        let maxDist = maxDistRef.current;
        if (maxDist === 0) {
           const rect = titleRef.current.getBoundingClientRect();
           maxDist = rect.width / 2;
           maxDistRef.current = maxDist;
        }

        spansRef.current.forEach(span => {
          if (!span) return;

          // Read from data attributes instead of forcing reflow
          // Fallback to rect if not set (first frame)
          let centerX = parseFloat(span.dataset.centerX || "0");
          let centerY = parseFloat(span.dataset.centerY || "0");
          
          if (centerX === 0 && centerY === 0) {
              const rect = span.getBoundingClientRect();
              centerX = rect.x + rect.width / 2;
              centerY = rect.y + rect.height / 2;
          }

          const charCenter = { x: centerX, y: centerY };
          const d = dist(mouseRef.current, charCenter);

          const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : 0;
          const alphaVal = alpha ? getAttr(d, maxDist, 0, 1).toFixed(2) : "1";

          const newFontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;

          if (span.style.fontVariationSettings !== newFontVariationSettings) {
            span.style.fontVariationSettings = newFontVariationSettings;
          }
          if (alpha && span.style.opacity !== alphaVal) {
            span.style.opacity = alphaVal;
          }
        });
      }

      rafId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting) {
            if (!isRunning) {
                isRunning = true;
                animate();
            }
        } else {
            isRunning = false;
            cancelAnimationFrame(rafId);
        }
    }, { threshold: 0 });

    if (containerRef.current) {
        observer.observe(containerRef.current);
    }

    return () => {
        isRunning = false;
        observer.disconnect();
        cancelAnimationFrame(rafId);
    };
  }, [width, weight, italic, alpha]);

  const styleElement = useMemo(() => {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @font-face {
          font-family: '${fontFamily}';
          src: url('${fontUrl}');
          font-style: normal;
          font-display: swap;
        }

        .tp-flex {
          display: flex;
          justify-content: space-between;
        }

        .tp-stroke span {
          position: relative;
          color: ${textColor};
        }
        .tp-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 3px;
          -webkit-text-stroke-color: ${strokeColor};
        }

        .text-pressure-title {
          color: ${textColor};
        }
      `,
        }}
      />
    );
  }, [fontFamily, fontUrl, textColor, strokeColor]);

  const dynamicClassName = [className, flex ? 'tp-flex' : '', stroke ? 'tp-stroke' : ''].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {styleElement}
      <h1
        ref={titleRef}
        className={`text-pressure-title ${dynamicClassName}`}
        style={{
          fontFamily,
          textTransform: 'uppercase',
          fontSize: fontSize,
          lineHeight,
          transform: `scale(1, ${scaleY})`,
          transformOrigin: 'center center',
          margin: 0,
          textAlign: 'center',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          fontWeight: 100,
          width: '100%'
        }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => { spansRef.current[i] = el; }}
            data-char={char}
            style={{
              display: 'inline-block',
              color: stroke ? undefined : textColor
            }}
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
