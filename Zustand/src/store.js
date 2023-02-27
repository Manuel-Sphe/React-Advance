import { create } from 'zustand'
const useStore = create((set) => ({
    pokemon: [],
    filter:"",
    selectedPokemon: null,
    // Now we need 3 setters
    setPokemon : (pokemon) => set((state)=>({
        ...state,
            pokemon,
        })
    ),
    setFilter: (filter) =>set((state)=>({
        ...state,
        filter,
    })),
    setSelectedPokemon: (selectedPokemon)=>set((state)=>({
        ...state,
        selectedPokemon,
    })),

}));
// Now the store manages it's own fetch
fetch("/starting-react/pokemon.json")
      .then((resp) => resp.json())
      .then((pokemon)=> useStore.setState((state)=>({...state,pokemon
      })))


export default useStore;