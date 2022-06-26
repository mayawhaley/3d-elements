import './App.css';
import {Canvas} from '@react-three/fiber';
import Knot from './components/Knot';
import AnimatedSphere from './components/AnimatedSphere';
import Sphere from './components/Circle';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <Canvas className='canvas'>
       <Sphere/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
      </Canvas>

      <Canvas className='canvas'>
        <Knot/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1} />
      </Canvas>

      <Canvas className='canvas'>
       <AnimatedSphere/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
      </Canvas>

      </div>
    </div>
  );
}
