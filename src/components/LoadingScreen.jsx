import { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Sphere = () => {
  const texture = useLoader(TextureLoader, "./public/Project Images/image.png"); // Ensure this path is correct
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.03;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const BackgroundImage = () => {
  const texture = useLoader(TextureLoader, "./public/pf.png"); // Ensure this path is correct
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[10, 10]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [headertext, setHeaderText] = useState("");
  const fullText = "I'm a Data Analyst and a Software Engineer";
  const textHeader = "Hi, I'm Kelvin Nzioka";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setHeaderText(textHeader.substring(0, index));
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000); // Automatically continue after 1 second
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center overflow-hidden">
      <Canvas className="absolute inset-0 brightness-200">
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <BackgroundImage />
        <Sphere />
      </Canvas>
      <div className="w-[600px] h-[10px] bg-red-800 rounded relative overflow-hidden mb-4 mt-10">
          <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      <div className="absolute top-10 z-10">
        <img
          src="./public/pf.png"
          alt="Profile"
          className="brightness-50 w-24 h-24 sm:w-50 sm:h-50 md:w-100 md:h-100 rounded-full border-2 border-gray-400 shadow-lg"
        />
      </div>

      <div className="relative z-20 text-center mt-32">
        <div className="mb-4 text-4xl font-mono font-bold">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {headertext}
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">{text}</p>
          <span className="animate-blink ml-1"> | </span>
        </div>

        <div className="mb-4 text-2xl font-mono">Welcome to my portfolio!</div>

        
      </div>
    </div>
  );
};