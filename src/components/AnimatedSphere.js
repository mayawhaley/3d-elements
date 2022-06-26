import React, {useState} from "react";
import {Sphere, MeshDistortMaterial} from '@react-three/drei';
import { Html } from '@react-three/drei';

export default function AnimatedSphere() {
    const [widthSegments, setWidthSegments] = useState(30);
    const [heightSegments, setHeightSegments] = useState(30);
    const [roughness, setRoughness] = useState(0.5);
    const [radius, setRadius] = useState(0.8);
    const [speed, setSpeed] = useState(1.5);
    const [distort, setDistort] = useState(0.5);
    return(
    <Sphere visible args={[radius,widthSegments,heightSegments]} scale={2}>
        <MeshDistortMaterial 
        color={'#C7D3BF'} 
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

            <label>width segments: </label>
            <input type={'range'} min={0} max={50} value={widthSegments} onChange={(e) => setWidthSegments(e.target.value)}/>

            <label>height segments: </label>
            <input type={'range'} min={0} max={50} value={heightSegments} onChange={(e) => setHeightSegments(e.target.value)}/>

            <label>roughness: </label>
            <input type={'range'} step={0.1} min={0.01} max={5} value={roughness} onChange={(e) => setRoughness(e.target.value)}/>

            <label>radius: </label>
            <input type={'range'} step={0.1} min={0.5} max={2} value={radius} onChange={(e) => setRadius(e.target.value)}/>

            {/* <label>thetaStart: </label>
            <input type={'range'} min={0}  max={400} value={thetaStart} onChange={(e) => setThetaStart(e.target.value)}/> */}
        </Html>
    </Sphere>)
}