"use client";

import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface NodeData {
  id: string;
  label: string;
  targetId: string;
  targetDesc: string;
  x: number;
  y: number;
  color: string;
  pulse: string;
}

export default function NeuralDataCore() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const { theme } = useTheme();

  // Subtle interactive parallax on pointer move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotation({ x: y * -18, y: x * 18 });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setActiveNode(null);
  };

  const scrollToTarget = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDark = theme === "dark";
  const primaryCyan = isDark ? "#00f2fe" : "#0284c7";
  const sacredGold = isDark ? "#f59e0b" : "#b45309";
  const emeraldColor = isDark ? "#10b981" : "#059669";

  const nodes: NodeData[] = [
    {
      id: "lakehouse",
      label: "2TB+ Delta Lakehouse",
      targetId: "projects",
      targetDesc: "Navigate to Medallion Lakehouse Case Study",
      x: 150,
      y: 70,
      color: primaryCyan,
      pulse: "0.2s",
    },
    {
      id: "streaming",
      label: "500M+ Ingestion Core",
      targetId: "experience",
      targetDesc: "Navigate to Deloitte APAC Ingestion Chronicles",
      x: 340,
      y: 90,
      color: sacredGold,
      pulse: "0.8s",
    },
    {
      id: "nexus",
      label: "Nexus Neural Network",
      targetId: "projects",
      targetDesc: "Navigate to APAC Model Industrialization",
      x: 380,
      y: 280,
      color: primaryCyan,
      pulse: "1.4s",
    },
    {
      id: "soq",
      label: "SOQ Time-Series Engine",
      targetId: "projects",
      targetDesc: "Navigate to SOQ Algorithmic Optimization",
      x: 180,
      y: 350,
      color: emeraldColor,
      pulse: "2.0s",
    },
    {
      id: "mlops",
      label: "Observability Telemetry",
      targetId: "skills",
      targetDesc: "Navigate to Technical Skills & Credential Vault",
      x: 70,
      y: 220,
      color: sacredGold,
      pulse: "2.6s",
    },
  ];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[460px] aspect-square mx-auto flex items-center justify-center p-4 transition-transform duration-300 ease-out select-none"
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      aria-label="Interactive Neural Data Core and Pipeline Architecture Diagram"
      role="region"
    >
      {/* Background Radial Glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl pointer-events-none transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(245,158,11,0.08) 50%, transparent 70%)"
            : "radial-gradient(circle, rgba(2,132,199,0.12) 0%, rgba(180,83,9,0.08) 50%, transparent 70%)",
        }}
      />

      <svg
        viewBox="0 0 460 460"
        className="w-full h-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={sacredGold} />
            <stop offset="50%" stopColor={primaryCyan} />
            <stop offset="100%" stopColor={emeraldColor} />
          </linearGradient>

          <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryCyan} stopOpacity="0.6" />
            <stop offset="50%" stopColor={sacredGold} stopOpacity="0.2" />
            <stop offset="100%" stopColor={primaryCyan} stopOpacity="0.6" />
          </linearGradient>

          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Orbital Ring */}
        <circle
          cx="230"
          cy="230"
          r="190"
          fill="none"
          stroke="url(#ringGrad1)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          className="animate-spin-slow opacity-60 origin-center"
        />

        {/* Middle Orbital Ring */}
        <ellipse
          cx="230"
          cy="230"
          rx="145"
          ry="145"
          fill="none"
          stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)"}
          strokeWidth="1"
          strokeDasharray="8 6"
        />

        {/* Inner Sacred Geometrical Hexagon / Sri Yantra Matrix */}
        <polygon
          points="230,130 316,180 316,280 230,330 144,280 144,180"
          fill="none"
          stroke={sacredGold}
          strokeWidth="1"
          strokeOpacity={isDark ? "0.35" : "0.25"}
        />
        <polygon
          points="230,330 316,280 316,180 230,130 144,180 144,280"
          fill="none"
          stroke={primaryCyan}
          strokeWidth="0.8"
          strokeOpacity={isDark ? "0.3" : "0.2"}
          transform="rotate(30 230 230)"
        />

        {/* Dynamic Interconnecting Data Flow Lines */}
        {nodes.map((node) => (
          <line
            key={node.id}
            x1="230"
            y1="230"
            x2={node.x}
            y2={node.y}
            stroke={node.color}
            strokeWidth={activeNode === node.id ? "2" : "1"}
            strokeOpacity={activeNode === node.id ? "0.8" : "0.3"}
            strokeDasharray="4 4"
            className="data-flow-line"
          />
        ))}

        {/* Central Neural Data Hub Core */}
        <g
          className="cursor-pointer"
          tabIndex={0}
          role="button"
          aria-label="Central Prana Core — Navigate to Ashtanga Philosophy"
          onClick={() => {
            setActiveNode("core");
            scrollToTarget("philosophy");
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTarget("philosophy");
            }
          }}
        >
          <circle
            cx="230"
            cy="230"
            r="44"
            fill={isDark ? "#0a0f1e" : "#ffffff"}
            stroke="url(#coreGrad)"
            strokeWidth="2.5"
            filter="url(#glowEffect)"
          />
          <circle
            cx="230"
            cy="230"
            r="36"
            fill="none"
            stroke={sacredGold}
            strokeWidth="1"
            strokeDasharray="3 3"
            className="animate-spin-slow origin-center"
          />
          {/* Sanskrit Symbol in Heart of Core */}
          <text
            x="230"
            y="237"
            textAnchor="middle"
            fill={sacredGold}
            className="font-serif font-black text-2xl select-none"
          >
            ॐ
          </text>
        </g>

        {/* Orbital System Nodes */}
        {nodes.map((node) => {
          const isHovered = activeNode === node.id;
          return (
            <g
              key={node.id}
              className="cursor-pointer transition-all duration-200"
              tabIndex={0}
              role="button"
              aria-label={`${node.label}: ${node.targetDesc}`}
              onClick={() => scrollToTarget(node.targetId)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  scrollToTarget(node.targetId);
                }
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              {/* Pulsing Aura */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? "18" : "12"}
                fill={node.color}
                fillOpacity={isHovered ? "0.3" : "0.15"}
                className="pulse-glow"
              />
              {/* Solid Node Anchor */}
              <circle
                cx={node.x}
                cy={node.y}
                r={isHovered ? "8" : "6"}
                fill={node.color}
                stroke={isDark ? "#050811" : "#ffffff"}
                strokeWidth="2"
              />
              {/* Clean Node Label */}
              <text
                x={node.x}
                y={node.y > 230 ? node.y + 22 : node.y - 14}
                textAnchor="middle"
                className={`font-mono text-[10px] tracking-wide select-none transition-all duration-200 ${
                  isHovered
                    ? "font-bold fill-slate-900 dark:fill-white text-[11px]"
                    : "fill-slate-600 dark:fill-slate-400"
                }`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {/* Real-time Subtitle Telemetry Pill with Click-to-Jump cue */}
      <div className="absolute bottom-2 inset-x-4 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono glass border border-amber-500/20 text-slate-700 dark:text-slate-300 shadow-sm cursor-pointer hover:border-cyan-400 transition">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>
            {activeNode
              ? activeNode === "core"
                ? "Central Core: Jump to Ashtanga Philosophy →"
                : `${nodes.find((n) => n.id === activeNode)?.targetDesc} →`
              : "Click any node to navigate corresponding architecture"}
          </span>
        </span>
      </div>
    </div>
  );
}
