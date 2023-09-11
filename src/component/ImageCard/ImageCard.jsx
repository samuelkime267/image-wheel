/* eslint-disable */
import * as THREE from "three";
import fragmentShader from "../../shader/fragment.glsl";
import vertexShader from "../../shader/vertex.glsl";

export default function ImageCard({ texture, ...props }) {
  return (
    <mesh {...props}>
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{ imgTexture: { value: texture } }}
        side={THREE.DoubleSide}
      />
      <planeGeometry args={[5.5, 4]} />
    </mesh>
  );
}
