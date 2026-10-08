"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeProvider";

export default function ThreeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const icoMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const torusMaterialRef = useRef<THREE.MeshBasicMaterial | null>(null);
  const particleGeometryRef = useRef<THREE.BufferGeometry | null>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const isLightInitial = document.documentElement.classList.contains("light");

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    currentMount.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Floating Wireframe Icosahedron (Core Geometry)
    const icoGeometry = new THREE.IcosahedronGeometry(7, 1);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: isLightInitial ? 0x94a3b8 : 0xb4f000,
      wireframe: true,
      transparent: true,
      opacity: isLightInitial ? 0.12 : 0.16,
    });
    icoMaterialRef.current = icoMaterial;
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    mainGroup.add(icosahedron);

    // 2. Inner floating ring (Torus)
    const torusGeometry = new THREE.TorusGeometry(9, 0.08, 16, 64);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: isLightInitial ? 0xcbd5e1 : 0xc2f826,
      transparent: true,
      opacity: isLightInitial ? 0.14 : 0.18,
    });
    torusMaterialRef.current = torusMaterial;
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 3;
    mainGroup.add(torus);

    // 3. Ambient Particle Swarm (Optimized count: 75)
    const particleCount = 75;
    const particleGeometry = new THREE.BufferGeometry();
    particleGeometryRef.current = particleGeometry;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const primaryColor = new THREE.Color(isLightInitial ? 0x94a3b8 : 0xb4f000);
    const secondaryColor = new THREE.Color(isLightInitial ? 0x64748b : 0xe2e8f0);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 60;
      positions[i3 + 1] = (Math.random() - 0.5) * 45;
      positions[i3 + 2] = (Math.random() - 0.5) * 35;

      const mixedColor = Math.random() > 0.4 ? primaryColor : secondaryColor;
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    particleGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.16,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // Mouse Tracking with smooth interpolation
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 1.5;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Window Resize Handler
    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Optimized Animation Loop (capped ~35fps to save battery & CPU)
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let lastRender = 0;

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip render if document is in background
      if (document.hidden) return;

      // Throttle to ~35 FPS (~28ms)
      if (time - lastRender < 28) return;
      lastRender = time;

      const elapsedTime = clock.getElapsedTime();

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.06 + currentMouseX * 0.3;
      mainGroup.rotation.x = currentMouseY * 0.2;

      icosahedron.rotation.x = elapsedTime * 0.04;
      icosahedron.rotation.y = elapsedTime * 0.05;
      torus.rotation.z = elapsedTime * 0.07;

      renderer.render(scene, camera);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      icoGeometry.dispose();
      icoMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  // Update 3D colors when theme toggles
  useEffect(() => {
    if (!icoMaterialRef.current || !torusMaterialRef.current || !particleGeometryRef.current) return;
    const isLight = theme === "light";

    icoMaterialRef.current.color.setHex(isLight ? 0x94a3b8 : 0xb4f000);
    icoMaterialRef.current.opacity = isLight ? 0.12 : 0.16;

    torusMaterialRef.current.color.setHex(isLight ? 0xcbd5e1 : 0xc2f826);
    torusMaterialRef.current.opacity = isLight ? 0.14 : 0.18;

    const primaryColor = new THREE.Color(isLight ? 0x94a3b8 : 0xb4f000);
    const secondaryColor = new THREE.Color(isLight ? 0x64748b : 0xe2e8f0);

    const colorAttr = particleGeometryRef.current.getAttribute("color") as THREE.BufferAttribute;
    if (colorAttr) {
      const colors = colorAttr.array as Float32Array;
      for (let i = 0; i < colors.length / 3; i++) {
        const i3 = i * 3;
        const col = Math.random() > 0.4 ? primaryColor : secondaryColor;
        colors[i3] = col.r;
        colors[i3 + 1] = col.g;
        colors[i3 + 2] = col.b;
      }
      colorAttr.needsUpdate = true;
    }
  }, [theme]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-75"
    />
  );
}
