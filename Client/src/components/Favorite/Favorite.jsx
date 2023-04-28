import Card from "../Card/Card";
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from "../../redux/actions";
import { removeFav } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites, removeFav }) => {
    const handleRemoveFav = (id, onClose) => {
        removeFav(id, onClose);
    }

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }


    return (
        <>
        <select onChange= {handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange= {handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
        </select>

        {
            myFavorites.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose={() => handleRemoveFav(fav.id, fav.onClose)}
                    />
                )
            })
        }
        </>
    )
};

const mapStateToProps = (state) => {
    return{
        myFavorites: state.myFavorites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       removeFav: (id, onClose) => {dispatch(removeFav(id, onClose))}
    }
 }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);