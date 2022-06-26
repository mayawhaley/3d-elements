import React, { useRef, useState} from 'react';
import { useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei';
 
export default function Box() {
    const ref = useRef()
    const [radius, setRadius] = useState(0.8);
    const [tube, setTube] = useState(.4);
    const [tubularSegments, setTubularSegments] = useState(300);
    const [radialSegments, setRadialSegments] = useState(20);
    const [p, setP] = useState(1);
    const [q, setQ] = useState(5);


    useFrame((state, delta) => (ref.current.rotation.x += 0.01,ref.current.rotation.y += 0.01))
     
    return (
     <mesh ref={ref}>
         <torusKnotGeometry 
         attach={'geometry'} 
         scale={1} args={[radius, tube, tubularSegments, radialSegments, p, q ]}/>
         
         <meshStandardMaterial color={'#D8AA96'} attach={'material'} />
         <Html as='div' className='baseball-card'>
            <label>radius: </label>
            <input type={'range'} step={0.1} min={1} max={10} value={radius} onChange={(e) => setRadius(e.target.value)}/>

            <label>tube: </label>
            <input type={'range'} min={0.1} step={0.1} max={1} value={tube} onChange={(e) => setTube(e.target.value)}/>

            <label>tubular segments: </label>
            <input type={'range'} min={80} max={300} value={tubularSegments} onChange={(e) => setTubularSegments(e.target.value)}/>

            <label>radial segments: </label>
            <input type={'range'} min={3} max={200} value={radialSegments} onChange={(e) => setRadialSegments(e.target.value)}/>

            <label>p: </label>
            <input type={'range'} min={3} step={0.1} max={20} value={p} onChange={(e) => setP(e.target.value)}/>

            <label>q: </label>
            <input type={'range'} min={3} step={0.1} max={20} value={q} onChange={(e) => setQ(e.target.value)}/>
        </Html>
         
     </mesh>
     )
}