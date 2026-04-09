"use client";

import { useEffect, useRef } from "react";

const GRID       = 44;
const NODE_COUNT = 18;
const DOT_R      = 2.5;
const GLOW_R     = 8;
const SPEED_MIN  = 0.003;
const SPEED_MAX  = 0.008;

interface GridNode {
  gx: number; gy: number; // current grid cell
  tx: number; ty: number; // target grid cell
  p: number;              // progress 0 → 1
  speed: number;
  opacity: number;
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0, cols = 0, rows = 0, raf = 0;
    const nodes: GridNode[] = [];

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      cols = Math.ceil(w / GRID);
      rows = Math.ceil(h / GRID);
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function pickNext(n: GridNode): { tx: number; ty: number } {
      const options = [
        { tx: n.tx + 1, ty: n.ty },
        { tx: n.tx - 1, ty: n.ty },
        { tx: n.tx,     ty: n.ty + 1 },
        { tx: n.tx,     ty: n.ty - 1 },
      ].filter(d => d.tx >= 0 && d.tx <= cols && d.ty >= 0 && d.ty <= rows);
      return options[Math.floor(Math.random() * options.length)];
    }

    function initNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        const gx = Math.floor(Math.random() * (cols + 1));
        const gy = Math.floor(Math.random() * (rows + 1));
        nodes.push({
          gx, gy, tx: gx, ty: gy,
          p:       Math.random(),
          speed:   SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
          opacity: 0.25 + Math.random() * 0.45,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      ctx.strokeStyle = "rgba(0,0,0,0.05)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= cols; x++) {
        ctx.beginPath();
        ctx.moveTo(x * GRID, 0);
        ctx.lineTo(x * GRID, h);
        ctx.stroke();
      }
      for (let y = 0; y <= rows; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * GRID);
        ctx.lineTo(w, y * GRID);
        ctx.stroke();
      }

      // Moving nodes
      for (const n of nodes) {
        n.p += n.speed;
        if (n.p >= 1) {
          n.gx = n.tx; n.gy = n.ty;
          n.p  = 0;
          const next = pickNext(n);
          n.tx = next.tx; n.ty = next.ty;
        }

        const px = (n.gx + (n.tx - n.gx) * n.p) * GRID;
        const py = (n.gy + (n.ty - n.gy) * n.p) * GRID;

        // Soft glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, GLOW_R);
        grd.addColorStop(0, `rgba(14,165,233,${n.opacity * 0.6})`);
        grd.addColorStop(1, `rgba(14,165,233,0)`);
        ctx.beginPath();
        ctx.arc(px, py, GLOW_R, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14,165,233,${n.opacity})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    const handleResize = () => { resize(); initNodes(); };

    resize();
    initNodes();
    draw();

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 print:hidden"
      style={{ zIndex: -1 }}
    />
  );
}
