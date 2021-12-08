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
        Digit1: 'snow',
        Digit2: 'ice',
        Digit3: 'cobble',
        Digit4: 'diamond',
        Digit5: 'lamp'
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