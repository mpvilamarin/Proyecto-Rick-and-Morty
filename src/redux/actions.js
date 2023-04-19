import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';

export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

export const removeFav = (id, onClose) => {
    return { 
        type: REMOVE_FAV, payload: id,
        onCose: onClose
    }
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender}
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order}
};