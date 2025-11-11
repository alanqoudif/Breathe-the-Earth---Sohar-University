"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function GlobeCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 4;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio || 1);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const sphereGeometry = new THREE.SphereGeometry(1.2, 64, 64);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      emissive: 0x0f1b2a,
      roughness: 0.45,
      metalness: 0.2,
      transparent: true,
      opacity: 0.95,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    const wireGeometry = new THREE.SphereGeometry(1.25, 32, 32);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0x8bc6ec,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wire = new THREE.Mesh(wireGeometry, wireMaterial);
    scene.add(wire);

    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(3, 3, 4);
    scene.add(light);
    const ambient = new THREE.AmbientLight(0x5872a0, 0.8);
    scene.add(ambient);

    let animationFrame: number;
    const animate = () => {
      sphere.rotation.y += 0.0025;
      sphere.rotation.x += 0.0008;
      wire.rotation.y -= 0.0015;
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      container?.removeChild(renderer.domElement);
      sphereGeometry.dispose();
      wireGeometry.dispose();
      sphereMaterial.dispose();
      wireMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-64 w-full rounded-3xl border border-emerald-100 bg-white shadow-lg shadow-emerald-100/70 lg:h-[420px]"
    />
  );
}
