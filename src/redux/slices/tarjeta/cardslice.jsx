import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import rickmortyService from "../../../services/rickmorty.service";

 
const stateInitial=[
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          // ...
        ],
        "url": "https://rickandmortyapi.com/api/character/1",
        "created": "2017-11-04T18:48:46.250Z"
      },
      {
        "id": 183,
        "name": "Johnny Depp",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-500A)",
          "url": "https://rickandmortyapi.com/api/location/23"
        },
        "location": {
          "name": "Earth (C-500A)",
          "url": "https://rickandmortyapi.com/api/location/23"
        },
        "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
        "episode": [
          "https://rickandmortyapi.com/api/episode/8"
        ],
        "url": "https://rickandmortyapi.com/api/character/183",
        "created": "2017-12-29T18:51:29.693Z"
      }
]

const initialState = [];


export const retrieveRickMorty = createAsyncThunk(
  "character/retrieve",
  async () => {
    const res = await rickmortyService.getAll();
    return res.data;
  }
);

export const findRickMortysByName = createAsyncThunk(
  "character/findByName",
  async ({ name }) => {
    const res = await rickmortyService.findByName(name);
    return res.data;
  }
);


 const cardSlice= createSlice({
    name:'card',
    initialState,
    extraReducers:{
        // createCard:(state, action)=>{
        //     const{id}=action.payload;
        //     if(state.length===0 ||
        //         state.filter((item)=>item.id===id).length===0){
        //             state.push(action.payload)

        //         }
        // },deleteCard:(state, action)=>{
        //     const cardFound= state.find((card)=>card.id=== action.payload)
        //     if(cardFound){
        //         state.splice(state.indexOf(cardFound),1);
        //     }
        // },
        [retrieveRickMorty.fulfilled]:(state, action)=>{
          console.log(action.payload.results);
         return [...action.payload.results];
        },
        [findRickMortysByName.fulfilled]: (state, action) => {
          return [...action.payload];
        }
 
    }
});

export const { reducer}= cardSlice
export default reducer;