import React from 'react';
import { Canvas } from 'react-three-fiber';

import { Stars } from 'drei';
import { Physics } from 'use-cannon';
import {nanoid} from 'nanoid';

import { Ground } from './components/Ground';
import { Player } from './components/Player';
import { Cube } from './components/Cube';

import { useStore } from './hooks/useStore';
import { useInterval } from "./hooks/useInterval";

function App() {
  const [cubes, saveWorld] = useStore ((state) => [
    state.cubes, 
    state.saveWorld,
  ]);

  useInterval(() => {
    saveWorld(cubes);
    console.log("saved");
  }, 10000);

  return (
    <Canvas shadowMap sRGB>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      <ambientLight intensity={.25} />
      <pointLight castShadow intensity={.7} position={[100, 100, 100]} />
      <Physics gravity={[0, -30, 0]}>
        <Ground position={[0, 0.5, 0]} />
        <Player position={[0, 3, 10]} />
        {cubes.map(cube => (
          <Cube position={cube.pos} key={nanoid()} texture={cube.texture} />
        ))}
        
      </Physics>
    </Canvas>
  );
}

export default App;
