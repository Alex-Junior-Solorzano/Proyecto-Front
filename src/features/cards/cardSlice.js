import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    {
        id: "1",
        name: "Sujeto1",
        image: "https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg",
        location: "Tierra",
        description: "Es un humano normal",
    },
    {
        id: "2",
        name: "Sujeto2",
        image: "https://conceptodefinicion.de/wp-content/uploads/2014/05/Imagen-2.jpg",
        location: "Tierra",
        description: "Es un bicho raro",
    },
];

export const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers: {
        addCard: (state, action) => {
            state.push(action.payload)
        },
        deleteCard: (state, action) => {
            const CardFound = state.find(card => card.id === action.payload)
            if(CardFound){
                state.splice(state.indexOf(CardFound),1)
            }
        },
        editCard: (state, action) => {
            const {id, name,image,location, description} = action.payload
            const foundCard = state.find(card => card.id === id)

            if(foundCard){
                foundCard.name = name
                foundCard.image = image
                foundCard.description = description
                foundCard.location = location
            }
        }
    }
})

export const {addCard,deleteCard,editCard} = cardSlice.actions
export default cardSlice.reducer