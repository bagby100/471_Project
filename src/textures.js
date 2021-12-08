import sandImg from './images/sand.png';
import sandbrickImg from './images/sandbrick.png';
import soulImg from './images/soul.png';
import cactusImg from './images/cactus.png';
import stoneImg from './images/stone.png';

import { TextureLoader } from 'three';



export const sand = new TextureLoader().load(sandImg);
export const soul = new TextureLoader().load(soulImg);
export const sandbrick = new TextureLoader().load(sandbrickImg);
export const cactus = new TextureLoader().load(cactusImg);
export const stone = new TextureLoader().load(stoneImg);