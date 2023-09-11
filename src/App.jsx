import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import "./style/App.css";
import bgImg from "./assets/img/bg2.jpg";

function App() {
  return (
    <>
      <div className="bg-img-container">
        <img className="bg-img" src={bgImg} alt="background-image" />
      </div>
      <div className="canvas-container">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60, near: 0.001, far: 1000 }}
        >
          <Experience />
        </Canvas>
      </div>
    </>
  );
}

export default App;
