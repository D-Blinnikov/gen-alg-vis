import { useEffect, useState } from "react";
import Space from "./Space";
import { Canvas } from "@react-three/fiber";
import {useSpaceStore} from "../store/useSpaceStore"

const SpaceWrapper = ({session, balls, disposedBalls}) => {

    const colorPointer = useSpaceStore(state => state.colorPointer)

    return ( 
        <>
       <Canvas camera={{ 
            fov: 40,
            position: [-80, 80, 80],
            far : 100000}} className={`${colorPointer}`}>

        <Space disposedBalls = {disposedBalls}
        balls = {balls}
        session = {session}/>
        </Canvas>
        </>
     );
}
 
export default SpaceWrapper;