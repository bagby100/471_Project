import create from 'zustand';

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
window.localStorage.setItem(key, JSON.stringify(value));

export const useStore = create ((set) => ({
    cubes: getLocalStorage('world') || [{pos:[0, 0, 0], texture: 'snow'},
    {pos:[1, 0, 0], texture: 'log'},
    {pos:[2, 0, 0], texture: 'ice'},
    {pos:[3, 0, 0], texture: 'lamp'},
    {pos:[4, 0, 0], texture: 'diamond'}],
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
    texture: 'log',
    setTexture: (texture) => set((state) => ({ texture})),
    saveWorld: () => 
        set((state) => {
            setLocalStorage('world', state.cubes);
    }),

}));