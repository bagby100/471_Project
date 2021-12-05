import React, { useEffect, useRef } from 'react';
import { useSphere } from 'use-cannon';
import { useThree, useFrame} from 'react-three-fiber';
import { useKeyBoardControls } from '../hooks/useKeyboardControls';


export const Player = (props) => {
    
    const {
        moveForward, 
        moveBackward, 
        moveLeft, 
        moveRight, 
        jump } = useKeyBoardControls();
    console.log('forward', moveForward);
    const { camera } = useThree();
    const [ref] = useSphere (() => ({
        mass: 1,
        type: 'Dynamic',
        ...props,
    }));

    useFrame(() => {
        camera.position.copy(ref.current.position);
    });
    return (
        <>
        <mesh ref= {ref} />
        </>
    );

};