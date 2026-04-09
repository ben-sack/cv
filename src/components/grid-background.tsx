"use client";

import { useEffect, useRef } from "react";

const GRID          = 44;
const DOT_R         = 2.5;
const GLOW_R        = 8;
const SPEED_MIN     = 0.003;
const SPEED_MAX     = 0.008;
const LINK_DIST     = 200; // px — nodes closer than this draw a connection
const LINK_ALPHA    = 0.35; // max opacity of connection line

const PALETTE = [
  [100, 116, 139], // slate blue
  [99,  102, 241], // indigo
  [20,  184, 166], // teal
  [249, 115,  22], // warm orange
] as const;

interface GridNode {
  gx: number; gy: number; // current grid cell
  tx: number; ty: number; // target grid cell
  p: number;              // progress 0 → 1
  speed: number;
  opacity: number;
  rgb: readonly [number, number, number];
}

export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0, cols = 0, rows = 0, raf = 0;
    const nodes: GridNode[] = [];

    // Capture as non-null so TypeScript doesn't complain inside closures
    const el: HTMLCanvasElement = canvas;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      cols = Math.ceil(w / GRID);
      rows = Math.ceil(h / GRID);
      el.width  = w * dpr;
      el.height = h * dpr;
      el.style.width  = `${w}px`;
      el.style.height = `${h}px`;
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
      const count = window.innerWidth < 640 ? 4 : 8;
      for (let i = 0; i < count; i++) {
        const gx = Math.floor(Math.random() * (cols + 1));
        const gy = Math.floor(Math.random() * (rows + 1));
        nodes.push({
          gx, gy, tx: gx, ty: gy,
          p:       Math.random(),
          speed:   SPEED_MIN + Math.random() * (SPEED_MAX - SPEED_MIN),
          opacity: 0.25 + Math.random() * 0.45,
          rgb:     PALETTE[Math.floor(Math.random() * PALETTE.length)],
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      // Grid lines
      const isDark = document.documentElement.classList.contains("dark");
      ctx.strokeStyle = isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)";
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

      // Advance nodes and collect pixel positions
      const pos: [number, number][] = nodes.map(n => {
        n.p += n.speed;
        if (n.p >= 1) {
          n.gx = n.tx; n.gy = n.ty;
          n.p  = 0;
          const next = pickNext(n);
          n.tx = next.tx; n.ty = next.ty;
        }
        return [
          (n.gx + (n.tx - n.gx) * n.p) * GRID,
          (n.gy + (n.ty - n.gy) * n.p) * GRID,
        ];
      });

      // Connections — drawn beneath nodes, fade in/out with proximity
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const [ax, ay] = pos[i];
          const [bx, by] = pos[j];
          const dist = Math.hypot(bx - ax, by - ay);
          if (dist >= LINK_DIST) continue;

          const alpha = (1 - dist / LINK_DIST) * LINK_ALPHA;
          const [r1, g1, b1] = nodes[i].rgb;
          const [r2, g2, b2] = nodes[j].rgb;
          const grad = ctx.createLinearGradient(ax, ay, bx, by);
          grad.addColorStop(0, `rgba(${r1},${g1},${b1},${alpha})`);
          grad.addColorStop(1, `rgba(${r2},${g2},${b2},${alpha})`);
          ctx.beginPath();
          ctx.moveTo(ax, ay);
          ctx.lineTo(bx, by);
          ctx.strokeStyle = grad;
          ctx.stroke();
        }
      }

      // Nodes — drawn on top of connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const [px, py] = pos[i];
        const [r, g, b] = n.rgb;

        // Soft glow
        const grd = ctx.createRadialGradient(px, py, 0, px, py, GLOW_R);
        grd.addColorStop(0, `rgba(${r},${g},${b},${n.opacity * 0.6})`);
        grd.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(px, py, GLOW_R, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, DOT_R, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${n.opacity})`;
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
      style={{ zIndex: 0 }}
    />
  );
}
