import { useState, useEffect } from 'react'
import { useStore } from './useStore'

function actionByKey(key){
    const keys = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: 'jump',
    };
    return keys[key];
}

function textureByKey(key) {
    const keys = {
        Digit1: 'nethOre',
        Digit2: 'nethBrick',
        Digit3: 'glass',
        Digit4: 'glow',
        Digit5: 'obsidian'
    };
    return keys[key];
}

export const useKeyBoardControls = () => {
    const [movement, setMovement] = useState({ 
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,

    });

const setTexture = useStore ((state) => state.setTexture);

useEffect(() => {
    const handleKeyDown = (e) => {
        if(actionByKey(e.code)) {
            setMovement((state) => ({...state, [actionByKey(e.code)]: true}));
        }

        if(textureByKey(e.code)){
            setTexture(textureByKey(e.code));
        }
    };
    const handleKeyUp = (e) => {
        if(actionByKey(e.code)){
            setMovement((state) => ({...state, [actionByKey(e.code)]: false}));
        }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return() => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);   
    };
});
return movement;
};