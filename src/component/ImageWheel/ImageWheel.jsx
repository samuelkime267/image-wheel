/* eslint-disable */
import * as THREE from "three";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import ImageCard from "../ImageCard/ImageCard";
import { ImageData } from "../../data/image.data";
import { useFrame } from "@react-three/fiber";

import React, { useState, useEffect } from "react";

const ImageWheel = () => {
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [wheelScale, setWheelScale] = useState(0);

  useEffect(() => {
    const updateDeviceWidth = () => setDeviceWidth(window.innerWidth);
    updateDeviceWidth();

    window.addEventListener("resize", updateDeviceWidth);

    return () => window.removeEventListener("resize", updateDeviceWidth);
  }, []);

  useEffect(() => {
    if (deviceWidth === 0) return;

    if (deviceWidth >= 1024) {
      setWheelScale(1);
      return;
    }
    if (deviceWidth < 768) {
      setWheelScale(0.55);
      return;
    }
    if (deviceWidth >= 768 && deviceWidth < 1024) {
      setWheelScale(0.65);
    }
  }, [deviceWidth]);

  const textures = useTexture(ImageData);
  const incDegree = (Math.PI * 2) / textures.length;

  const ImageWheelRef = useRef();
  useFrame(() => {
    ImageWheelRef.current.rotation.z += 0.001;
  });

  return (
    <group scale={wheelScale} position-x={deviceWidth >= 1024 ? -10 : -5.5}>
      <group ref={ImageWheelRef}>
        <group rotation-z={Math.PI * 2}>
          {textures.map((texture, i) => (
            <group
              position={[
                10 * Math.cos(incDegree * i),
                10 * Math.sin(incDegree * i),
                0,
              ]}
              key={i}
            >
              <ImageCard rotation-z={incDegree * i} texture={texture} />
            </group>
          ))}
        </group>
      </group>
    </group>
  );
};

export default ImageWheel;
