import React, { useState } from "react";


/**
 * InteractiveGridPattern - Top section interactive grid with grey transparent strokes, blue fill on hover, and transparent background.
 */
export function InteractiveGridPattern({
  width = 80,
  height = 80,
  className = "",
  squaresClassName = "",
  gridHeight = 400, // height in px for the grid section
  svgProps = {},
  ...props
}) {
  const [hoveredSquare, setHoveredSquare] = useState(null);

  // Calculate grid size to fill only the top section
  const svgWidth = window.innerWidth || 1920;
  const svgHeight = gridHeight;
  const cols = Math.ceil(svgWidth / width);
  const rows = Math.ceil(svgHeight / height);

  return (
    <div
      className={`relative w-full`}
      style={{
        height: gridHeight,
        background: "transparent",
      }}
    >
      <svg
        width="100%"
        height={gridHeight}
        viewBox={`0 0 ${cols * width} ${rows * height}`}
        className={`absolute top-0 left-0 w-full h-full z-0 ${className}`}
        style={{
          display: "block",
          background: "transparent",
          ...(svgProps.style || {}),
        }}
        {...svgProps}
        {...props}
      >
        {Array.from({ length: cols * rows }).map((_, index) => {
          const x = (index % cols) * width;
          const y = Math.floor(index / cols) * height;
          return (
            <rect
              key={index}
              x={x}
              y={y}
              width={width}
              height={height}
              className={`transition-all duration-100 ease-in-out ${hoveredSquare === index ? "fill-purple-400/80" : "fill-transparent"} ${squaresClassName}`}
              style={{
                stroke: "rgba(0, 0, 0, 0.02)",
                strokeWidth: 2,
                background: "transparent",
                // fill: "transparent",
              }}
              onMouseEnter={() => setHoveredSquare(index)}
              onMouseLeave={() => setHoveredSquare(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}