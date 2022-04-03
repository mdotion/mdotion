import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { SplitViewView } from "../..";
import DragHandle from "../drag-handle";
import View from "../view";
import "./container.css";

export interface ActivityBarRootProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  oriantation: "horizontal" | "vertical";
  initSizes: (
    | {
        type: "fixed";
        size: number;
      }
    | {
        type: "resizeable";
        size: number;
        minSize: number;
        maxSize: number;
      }
    | {
        type: "auto";
      }
  )[];
}

const Container: FC<ActivityBarRootProps> = ({
  oriantation,
  className,
  initSizes,
  children,
  ...props
}) => {
  const [sizes, setSizes] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dargIndex, setDargIndex] = useState<number | null>(null);
  const [dragStartMouseEvent, setDragStartMouseEvent] =
    useState<MouseEvent | null>(null);
  const [sizesBeforeDrag, setSizesBeforeDrag] = useState<number[]>([]);

  const initializeSizes = useCallback(() => {
    console.log("Calculating....");
    if (containerRef.current) {
      const totalSize =
        oriantation === "horizontal"
          ? containerRef.current.clientWidth
          : containerRef.current.clientHeight;
      let totalSizesTaken = 0;
      initSizes.forEach((size) => {
        if (size.type !== "auto") {
          totalSizesTaken += size.size;
        }
      });
      const remainSize = Math.max(totalSize - totalSizesTaken, 0);
      const autoWidth =
        remainSize / initSizes.filter((size) => size.type === "auto").length;
      const sizes = initSizes.map((size) => {
        if (size.type === "auto") return autoWidth;
        return size.size;
      });
      setSizes(sizes);
    }
  }, [initSizes, oriantation, containerRef]);

  const calculateSizes = useCallback(
    (newSizes: number[] = sizes) => {
      if (containerRef.current) {
        const totalSize =
          oriantation === "horizontal"
            ? containerRef.current.clientWidth
            : containerRef.current.clientHeight;
        let totalSizesTaken = 0;

        newSizes.forEach((size, i) => {
          if (initSizes[i].type !== "auto") {
            totalSizesTaken += size;
          }
        });

        const remainSize = Math.max(totalSize - totalSizesTaken, 0);
        const autoWidth =
          remainSize / initSizes.filter((size) => size.type === "auto").length;

        newSizes = newSizes.map((size, i) => {
          if (initSizes[i].type === "auto") return autoWidth;
          return size;
        });
        setSizes(newSizes);
      }
    },
    [sizes, setSizes, initSizes, oriantation, containerRef]
  );

  const onDrag = useCallback(
    (e: MouseEvent) => {
      if (dragStartMouseEvent && dargIndex !== null) {
        const delta =
          oriantation === "horizontal"
            ? e.clientX - dragStartMouseEvent.clientX
            : e.clientY - dragStartMouseEvent.clientY;
        const sizes = sizesBeforeDrag.map((size, i) => {
          let newSize = size;
          if (i === dargIndex) {
            newSize = size + delta;
          }
          if (i === dargIndex + 1) {
            newSize = size - delta;
          }
          const currentSize = initSizes[i];
          if (currentSize.type === "resizeable") {
            return Math.max(
              Math.min(newSize, currentSize.maxSize),
              currentSize.minSize
            );
          }
          return newSize;
        });
        calculateSizes(sizes);
      }
    },
    [sizes, sizesBeforeDrag, dargIndex, calculateSizes]
  );

  const onDragStart = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
      console.log(index);
      setDargIndex(index);
      setDragStartMouseEvent(e.nativeEvent);
      setSizesBeforeDrag(sizes);
    },
    [sizes, setSizes, setDargIndex]
  );

  const onDragEnd = useCallback(() => {
    setDargIndex(null);
  }, [sizes, setSizes, setDargIndex]);

  useEffect(() => {
    initializeSizes();
    return () => {};
  }, []);

  const onResize = useCallback(() => {
    calculateSizes();
  }, [sizes]);

  useEffect(() => {
    if (containerRef.current) {
      window.addEventListener("resize", onResize);
    }
    return () => {
      window?.removeEventListener("resize", onResize);
    };
  }, [containerRef, onResize]);

  useEffect(() => {
    if (dargIndex !== null) {
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onDragEnd);
    }
    return () => {
      window.removeEventListener("mousemove", onDrag);
      window.removeEventListener("mouseup", onDragEnd);
    };
  }, [dargIndex, onDragEnd, onDrag]);

  return (
    <>
      <div
        ref={containerRef}
        className={`split-view-container ${oriantation} ${
          dargIndex !== null ? "dragging" : ""
        } ${className || ""}`}
        {...props}
      >
        {children.map((child: JSX.Element, i: number) => (
          <View
            {...child.props}
            key={i}
            style={{
              ...(oriantation === "horizontal"
                ? {
                    left: sizes.slice(0, i).reduce((a, b) => a + b, 0),
                    width: sizes[i],
                  }
                : {
                    top: sizes.slice(0, i).reduce((a, b) => a + b, 0),
                    height: sizes[i],
                  }),
            }}
          />
        ))}
        {sizes.map((size, i: number) => {
          const offset = sizes.slice(0, i).reduce((a, b) => a + b, 0) + size;
          if (initSizes[i].type === "fixed" || i === sizes.length - 1) {
            return null;
          }
          return (
            <DragHandle
              oriantation={oriantation}
              key={i}
              style={{
                ...(oriantation === "horizontal"
                  ? { left: offset }
                  : { top: offset }),
              }}
              onMouseDown={(e) => onDragStart(e, i)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Container;
