"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function OrbScene({ color = "#d8cfc3", product = false }: { color?: string; product?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.z = product ? 4.2 : 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(product ? 1.08 : 1.22, 96, 96);
    const material = new THREE.MeshPhysicalMaterial({
      color,
      roughness: 0.42,
      metalness: 0,
      transmission: 0.18,
      thickness: 0.6,
      clearcoat: 0.42,
      emissive: color,
      emissiveIntensity: 0.08,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(product ? 1.17 : 1.32, 48, 48),
      new THREE.MeshBasicMaterial({
        color: "#fffaf2",
        transparent: true,
        opacity: 0.18,
        wireframe: true,
      }),
    );
    scene.add(wire);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = product ? 260 : 520;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 5.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: "#0e0e0e",
        size: 0.012,
        transparent: true,
        opacity: product ? 0.16 : 0.18,
      }),
    );
    scene.add(particles);

    const key = new THREE.PointLight("#fffaf2", 8, 10);
    key.position.set(2, 2.5, 3);
    scene.add(key);
    scene.add(new THREE.AmbientLight("#f6f1ea", 2.4));

    const mouse = new THREE.Vector2();
    const onMove = (event: PointerEvent) => {
      const rect = host.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    host.addEventListener("pointermove", onMove, { passive: true });

    const resize = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", resize);
    resize();

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const time = performance.now() * 0.00035;
      orb.rotation.y = time + mouse.x * 0.18;
      orb.rotation.x = Math.sin(time) * 0.08 + mouse.y * 0.08;
      wire.rotation.y = -time * 0.72;
      wire.rotation.x = time * 0.28;
      particles.rotation.y = time * 0.2;
      key.position.x = 2 + mouse.x * 1.4;
      key.position.y = 2.4 + mouse.y * 1.1;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      host.innerHTML = "";
    };
  }, [color, product]);

  return <div ref={hostRef} className="h-full min-h-[280px] w-full" aria-hidden="true" />;
}
