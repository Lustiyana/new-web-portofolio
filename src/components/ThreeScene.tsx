/** @format */
"use client";
// components/TorusScene.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeScene = () => {
  const mountRef: any = useRef(null);

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Create scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // Create renderer with alpha for transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Create geometry and material for the torus (donut shape)
    const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x00ff00,
      roughness: 0.5,
      metalness: 0.5,
      transparent: true,
      //   opacity: 0.8, // Adjust opacity for transparency
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.castShadow = true; // Allow the torus to cast shadows
    torus.receiveShadow = true; // Allow the torus to receive shadows
    scene.add(torus);

    // Create lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // Directional light
    directionalLight.position.set(5, 5, 5).normalize();
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate);

      // Random rotation and scaling
      torus.rotation.x += Math.random() * 0.02;
      torus.rotation.y += Math.random() * 0.02;
      torus.scale.set(
        1 + Math.sin(Date.now() * 0.001) * 0.1,
        1 + Math.cos(Date.now() * 0.001) * 0.1,
        1 + Math.sin(Date.now() * 0.001) * 0.1
      );

      renderer.render(scene, camera);
    };

    animate();

    // Clean up on component unmount
    return () => {
      mountRef?.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "640px",
        height: "640px",
        position: "sticky",
        top: 0,
        left: 0,
      }}
    />
  );
};

export default ThreeScene;
