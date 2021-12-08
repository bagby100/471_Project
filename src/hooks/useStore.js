import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));

localStorage.clear(); //to be changed later

const setLocalStorage = (key, value) =>
window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create ((set) => ({
    cubes: getLocalStorage('world') || [{pos:[0, 1, 0], texture: 'nethOre'},
    {pos:[1, 1, 0], texture: 'nethBrick'},
    {pos:[2, 1, 0], texture: 'magma'},
    {pos:[3, 1, 0], texture: 'glow'},
    {pos:[4, 1, 0], texture: 'obsidian'}],
    addCube: (x, y, z, texture) => 
    set(state => ({
        cubes: [...state.cubes, { pos: [x, y, z], texture }],
    })),
    removeCube: (x,y,z) => 
    set((state) => ({
        cubes: state.cubes.filter(
            ({pos}) => pos[0] !== x || pos[1] !== y || pos[2] !== z,
        ),
    })
    
),
    texture: 'nethOre',
    setTexture: (texture) => set((state) => ({ texture})),
    saveWorld: () => 
        set((state) => {
            setLocalStorage('world', state.cubes);
    }),

}));