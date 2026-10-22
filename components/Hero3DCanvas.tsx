"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";
import { Sparkles, Orbit, Droplets, Atom } from "lucide-react";

export type CosmicMode = "blackhole" | "liquid" | "quantum";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [cosmicMode, setCosmicMode] = useState<CosmicMode>("blackhole");

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // -------------------------------------------------------------
    // 1. SCENE & EXPANSIVE CAMERA (Zero Cropping, Wide Frustum)
    // -------------------------------------------------------------
    const scene = new THREE.Scene();
    const width = container.clientWidth || 540;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 5.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isLight ? 1.4 : 1.3;
    container.appendChild(renderer.domElement);

    // Root Group
    const spaceGroup = new THREE.Group();
    scene.add(spaceGroup);

    // -------------------------------------------------------------
    // COLOR PALETTES (Synchronized with Active Brand Themes)
    // -------------------------------------------------------------
    const primaryGlow = isLight
      ? new THREE.Color("#FF6B00") // Solar Amber Coral
      : new THREE.Color("#B4F000"); // Cyber Lime

    const secondaryGlow = isLight
      ? new THREE.Color("#FFA726") // Warm Gold
      : new THREE.Color("#10B981"); // Deep Tech Emerald

    const tertiaryGlow = isLight
      ? new THREE.Color("#FB923C") // Peach Flame
      : new THREE.Color("#00F0FF"); // Cyan Horizon

    // -------------------------------------------------------------
    // 2. PROCEDURAL ACCRETION DISK PLASMA TEXTURE
    // -------------------------------------------------------------
    const createDiskTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 128;
      const ctx = canvas.getContext("2d");
      if (!ctx) return new THREE.CanvasTexture(canvas);

      const grad = ctx.createLinearGradient(0, 0, canvas.width, 0);
      if (isLight) {
        grad.addColorStop(0.0, "rgba(255, 107, 0, 0.0)");
        grad.addColorStop(0.15, "rgba(255, 167, 38, 0.85)");
        grad.addColorStop(0.4, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.65, "rgba(255, 107, 0, 0.95)");
        grad.addColorStop(0.9, "rgba(251, 146, 60, 0.6)");
        grad.addColorStop(1.0, "rgba(255, 107, 0, 0.0)");
      } else {
        grad.addColorStop(0.0, "rgba(180, 240, 0, 0.0)");
        grad.addColorStop(0.15, "rgba(16, 185, 129, 0.85)");
        grad.addColorStop(0.4, "rgba(255, 255, 255, 1.0)");
        grad.addColorStop(0.65, "rgba(180, 240, 0, 0.95)");
        grad.addColorStop(0.9, "rgba(0, 240, 255, 0.6)");
        grad.addColorStop(1.0, "rgba(180, 240, 0, 0.0)");
      }

      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add streaks and plasma noise bands
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * canvas.width;
        const w = 40 + Math.random() * 120;
        ctx.fillStyle = isLight
          ? `rgba(255, 240, 220, ${0.15 + Math.random() * 0.3})`
          : `rgba(220, 255, 200, ${0.15 + Math.random() * 0.3})`;
        ctx.fillRect(x, 0, w, canvas.height);
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.ClampToEdgeWrapping;
      return tex;
    };

    const diskTexture = createDiskTexture();

    // -------------------------------------------------------------
    // 3. CENTRAL ORGANIC LIQUID CORE (Vertex Displaced Pulsating Sphere)
    // -------------------------------------------------------------
    // Custom Shader for Dynamic Organic Liquid Wave Deformations
    const liquidVertexShader = `
      uniform float uTime;
      uniform float uDistortion;
      uniform float uSpeed;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vDisplacement;

      // GLSL Simplex-like continuous wave synthesis
      float getWave(vec3 p) {
        float freq = 2.4;
        float w1 = sin(p.x * freq + uTime * uSpeed) * cos(p.y * freq + uTime * uSpeed * 0.9);
        float w2 = sin(p.z * freq * 1.5 + uTime * uSpeed * 1.2) * cos(p.x * freq * 0.8 - uTime * 0.5);
        float w3 = sin((p.x + p.y + p.z) * 1.8 + uTime * uSpeed * 1.4);
        return (w1 + w2 + w3) / 3.0;
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vec3 displacedPos = position;
        
        float disp = getWave(position);
        vDisplacement = disp;
        displacedPos += normal * (disp * uDistortion);

        vec4 mvPosition = modelViewMatrix * vec4(displacedPos, 1.0);
        vViewPosition = -mvPosition.xyz;
        vWorldPosition = (modelMatrix * vec4(displacedPos, 1.0)).xyz;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const liquidFragmentShader = `
      uniform float uTime;
      uniform vec3 uColorPrimary;
      uniform vec3 uColorSecondary;
      uniform vec3 uColorCore;
      uniform float uFresnelPower;
      uniform float uCoreDarkness;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      varying vec3 vWorldPosition;
      varying float vDisplacement;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);

        // Radiant Outer Fresnel Rim
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), uFresnelPower);

        // Gradient color blending with fluid displacement
        vec3 fluidColor = mix(uColorPrimary, uColorSecondary, vDisplacement * 0.5 + 0.5);
        
        // Deep Central Cosmic Void / Singularity Core
        vec3 finalColor = mix(uColorCore, fluidColor, fresnel * uCoreDarkness);
        finalColor += fluidColor * fresnel * 1.8;

        // Subtle specular highlight from the accretion disk
        float spec = pow(max(dot(reflect(-viewDir, normal), vec3(0.0, 1.0, 0.5)), 0.0), 16.0);
        finalColor += vec3(spec * 0.6);

        gl_FragColor = vec4(finalColor, 0.96);
      }
    `;

    const liquidUniforms = {
      uTime: { value: 0 },
      uDistortion: { value: cosmicMode === "liquid" ? 0.32 : 0.16 },
      uSpeed: { value: cosmicMode === "liquid" ? 1.6 : 1.1 },
      uColorPrimary: { value: primaryGlow },
      uColorSecondary: { value: secondaryGlow },
      uColorCore: {
        value: isLight
          ? new THREE.Color("#18181B") // Dark titanium void for light mode
          : new THREE.Color("#030712"), // Absolute black hole void
      },
      uFresnelPower: { value: cosmicMode === "blackhole" ? 3.6 : 2.4 },
      uCoreDarkness: { value: cosmicMode === "blackhole" ? 0.95 : 0.65 },
    };

    const sphereGeom = new THREE.IcosahedronGeometry(1.2, 64);
    const sphereMat = new THREE.ShaderMaterial({
      vertexShader: liquidVertexShader,
      fragmentShader: liquidFragmentShader,
      uniforms: liquidUniforms,
      transparent: true,
    });

    const liquidOrb = new THREE.Mesh(sphereGeom, sphereMat);
    spaceGroup.add(liquidOrb);

    // -------------------------------------------------------------
    // 4. GRAVITATIONAL ACCRETION DISK (Horizontal Radiant Plasma Ring)
    // -------------------------------------------------------------
    const diskGroup = new THREE.Group();
    spaceGroup.add(diskGroup);

    // Flat Tilted Accretion Disk Ring
    const innerRadius = 1.35;
    const outerRadius = 3.1;
    const ringGeom = new THREE.RingGeometry(innerRadius, outerRadius, 96, 8);
    // Orient ring horizontally
    ringGeom.rotateX(-Math.PI / 2);

    const ringMat = new THREE.MeshBasicMaterial({
      map: diskTexture,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: isLight ? 0.85 : 0.92,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const accretionDisk = new THREE.Mesh(ringGeom, ringMat);
    diskGroup.add(accretionDisk);

    // -------------------------------------------------------------
    // 5. INTERSTELLAR GRAVITATIONAL LENSING ARCH (The Warped Light Halo)
    // As seen in the reference image: light curving above & behind the sphere!
    // -------------------------------------------------------------
    const lensRadius = 1.55;
    const lensTubeRadius = 0.08;
    const lensGeom = new THREE.TorusGeometry(lensRadius, lensTubeRadius, 32, 100);

    const lensMat = new THREE.MeshBasicMaterial({
      color: primaryGlow,
      transparent: true,
      opacity: isLight ? 0.75 : 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const topLensingArc = new THREE.Mesh(lensGeom, lensMat);
    topLensingArc.rotation.x = Math.PI / 2.35;
    topLensingArc.scale.set(1.15, 1.15, 1.6);
    diskGroup.add(topLensingArc);

    // Lower counter-lensing reflection arc
    const bottomLensingArc = new THREE.Mesh(lensGeom, lensMat);
    bottomLensingArc.rotation.x = -Math.PI / 2.35;
    bottomLensingArc.scale.set(1.15, 1.15, 1.6);
    diskGroup.add(bottomLensingArc);

    // Secondary Quantum Rings for Quantum Mode
    const quantumRingGeom = new THREE.TorusGeometry(2.0, 0.02, 16, 96);
    const quantumMat1 = new THREE.MeshBasicMaterial({
      color: tertiaryGlow,
      transparent: true,
      opacity: cosmicMode === "quantum" ? 0.7 : 0.0,
      blending: THREE.AdditiveBlending,
    });
    const quantumRing1 = new THREE.Mesh(quantumRingGeom, quantumMat1);
    quantumRing1.rotation.x = Math.PI / 3;
    spaceGroup.add(quantumRing1);

    const quantumRing2 = new THREE.Mesh(quantumRingGeom, quantumMat1);
    quantumRing2.rotation.y = Math.PI / 3;
    spaceGroup.add(quantumRing2);

    // -------------------------------------------------------------
    // 6. ORBITING STARDUST & GRAVITATIONAL PARTICLES
    // -------------------------------------------------------------
    const particleCount = 260;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeeds = new Float32Array(particleCount);
    const particleRadii = new Float32Array(particleCount);
    const particleAngles = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 1.4 + Math.random() * 2.2;
      const angle = Math.random() * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 0.4 * (radius / 2);

      particleRadii[i] = radius;
      particleAngles[i] = angle;
      particleSpeeds[i] = (0.4 + Math.random() * 0.8) / radius;

      particlePositions[i * 3] = radius * Math.cos(angle);
      particlePositions[i * 3 + 1] = yOffset;
      particlePositions[i * 3 + 2] = radius * Math.sin(angle);
    }

    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: primaryGlow,
      size: isLight ? 0.045 : 0.055,
      transparent: true,
      opacity: isLight ? 0.75 : 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    diskGroup.add(particles);

    // Initial tilt of the cosmic accretion disk (matching the reference image)
    diskGroup.rotation.x = 0.32;
    diskGroup.rotation.z = -0.08;

    // -------------------------------------------------------------
    // 7. SMOOTH INTERPOLATED MOUSE INTERACTION & HOVERING
    // -------------------------------------------------------------
    let animationFrameId: number;
    const clock = new THREE.Clock();

    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetTiltX = ny * 0.22;
      targetTiltY = nx * 0.32;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Render Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update shader time for organic fluid breathing
      liquidUniforms.uTime.value = elapsedTime;

      // Smooth sinus floating of the entire space object
      spaceGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.09;

      // Slowly spin the accretion disk texture
      diskTexture.offset.x = (elapsedTime * 0.08) % 1;

      // Animate orbiting stardust particles
      const posAttr = particleGeom.attributes.position;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        particleAngles[i] += particleSpeeds[i] * 0.02;
        const r = particleRadii[i];
        const a = particleAngles[i];
        posArray[i * 3] = r * Math.cos(a);
        posArray[i * 3 + 2] = r * Math.sin(a);
      }
      posAttr.needsUpdate = true;

      // Quantum rings spin in quantum mode
      if (cosmicMode === "quantum") {
        quantumRing1.rotation.z += 0.015;
        quantumRing2.rotation.x += 0.012;
      }

      // Smooth mouse follow parallax tilt
      currentTiltX += (targetTiltX - currentTiltX) * 0.05;
      currentTiltY += (targetTiltY - currentTiltY) * 0.05;

      spaceGroup.rotation.x = currentTiltX;
      spaceGroup.rotation.y = currentTiltY;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 540;
      const h = container.clientHeight || 520;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeom.dispose();
      sphereMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      lensGeom.dispose();
      lensMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      quantumRingGeom.dispose();
      quantumMat1.dispose();
      diskTexture.dispose();
      scene.clear();
    };
  }, [isLight, cosmicMode]);

  return (
    <div className="w-full relative flex flex-col items-center justify-center select-none z-10">
      {/* 3D Canvas Viewport (Unclipped, Generous Framing) */}
      <div
        ref={mountRef}
        className="w-full h-[420px] sm:h-[480px] lg:h-[530px] flex items-center justify-center relative overflow-visible cursor-default"
      >
        {/* Massive Radiating Aurora Halo behind the Event Horizon */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute w-[360px] sm:w-[480px] h-[220px] sm:h-[280px] rounded-[100%] filter blur-[80px] -z-10 ${
            isLight
              ? "bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.32)_0%,rgba(251,146,60,0.14)_50%,transparent_75%)]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(180,240,0,0.28)_0%,rgba(16,185,129,0.16)_45%,rgba(0,240,255,0.08)_65%,transparent_80%)]"
          }`}
        />

        {/* Horizontal Laser Light Blade Horizon (Matching the reference image) */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute w-[120%] h-[2px] filter blur-[3px] -z-10 ${
            isLight ? "bg-[#FF6B00]/70" : "bg-[#B4F000]/80 shadow-[0_0_24px_#B4F000]"
          }`}
        />
      </div>

      {/* Floating Aesthetic Space Object Mode Switcher */}
      <div className="relative -mt-4 p-1.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-2xl flex items-center justify-center gap-1.5 z-20">
        <button
          onClick={() => setCosmicMode("blackhole")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            cosmicMode === "blackhole"
              ? "bg-[#B4F000] text-black shadow-md font-bold scale-[1.02]"
              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80"
          }`}
          title="Gravitational Event Horizon Singularity"
        >
          <Orbit className="w-3.5 h-3.5" />
          <span>Event Horizon</span>
        </button>

        <button
          onClick={() => setCosmicMode("liquid")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            cosmicMode === "liquid"
              ? "bg-[#B4F000] text-black shadow-md font-bold scale-[1.02]"
              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80"
          }`}
          title="Organic Liquid Plasma Sphere"
        >
          <Droplets className="w-3.5 h-3.5" />
          <span>Liquid Plasma</span>
        </button>

        <button
          onClick={() => setCosmicMode("quantum")}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            cosmicMode === "quantum"
              ? "bg-[#B4F000] text-black shadow-md font-bold scale-[1.02]"
              : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/80"
          }`}
          title="Quantum Singularity with Energy Rings"
        >
          <Atom className="w-3.5 h-3.5" />
          <span>Quantum Rings</span>
        </button>
      </div>
    </div>
  );
}
