import React, {useState} from "react";
import {MeshDistortMaterial, Circle} from '@react-three/drei';
import { Html } from '@react-three/drei';

export default function AnimatedSphere() {
    const [distort, setDistort] = useState(0.5);
    const [speed, setSpeed] = useState(2);
    const [roughness, setRoughness] = useState(5);
    const [radius, setRadius] = useState(0.8);
    const [segments, setSegments] = useState(100);
    const [thetaStart, setThetaStart] = useState(200);
    return(
    <Circle visible args={[radius,segments,thetaStart]} scale={2}>
        <MeshDistortMaterial 
        color={'#807182'} 
        attach={'material'} 
        distort={distort} 
        speed={speed}
        roughness={roughness}
        />

        <Html as='div' className='baseball-card'>
        <label>distort: </label>
            <input type={'range'} step={0.1} min={0.5} max={2} value={distort} onChange={(e) => setDistort(e.target.value)}/>

            <label>speed: </label>
            <input type={'range'} min={1} step={0.1} max={5} value={speed} onChange={(e) => setSpeed(e.target.value)}/>

            <label>segments: </label>
            <input type={'range'} min={0} max={110} value={segments} onChange={(e) => setSegments(e.target.value)}/>

            <label>roughness: </label>
            <input type={'range'} min={0} max={200} value={roughness} onChange={(e) => setRoughness(e.target.value)}/>

            <label>radius: </label>
            <input type={'range'} step={0.1} min={0.1}  max={1.5} value={radius} onChange={(e) => setRadius(e.target.value)}/>

            <label>thetaStart: </label>
            <input type={'range'} min={0}  max={400} value={thetaStart} onChange={(e) => setThetaStart(e.target.value)}/>
        </Html>
    </Circle>)
}