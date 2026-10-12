"use client";

import { useMemo } from "react";
import qrcode from "qrcode-generator";

/**
 * Renders `value` as a scannable QR code, drawn as inline SVG rects so it
 * needs no network request and no external image asset (works offline, and
 * is unaffected by the GitHub Pages basePath).
 */
export default function QrCode({
  value,
  size = 88,
  label,
}: {
  value: string;
  size?: number;
  label: string;
}) {
  const { count, isDark } = useMemo(() => {
    const qr = qrcode(0, "M");
    qr.addData(value);
    qr.make();
    return { count: qr.getModuleCount(), isDark: qr.isDark.bind(qr) };
  }, [value]);

  const modules: { row: number; col: number }[] = [];
  for (let row = 0; row < count; row++) {
    for (let col = 0; col < count; col++) {
      if (isDark(row, col)) modules.push({ row, col });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${count} ${count}`}
      width={size}
      height={size}
      role="img"
      aria-label={label}
      shapeRendering="crispEdges"
    >
      <rect width={count} height={count} fill="#ffffff" />
      {modules.map(({ row, col }) => (
        <rect
          key={`${row}-${col}`}
          x={col}
          y={row}
          width={1}
          height={1}
          fill="#0f172a"
        />
      ))}
    </svg>
  );
}
