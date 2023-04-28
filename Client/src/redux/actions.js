import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action-types';
import axios from 'axios';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
        axios.post(endpoint, character)
        .then(({ data }) => {
            return dispatch({
             type: 'ADD_FAV',
             payload: data,
            });
        });
    };
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