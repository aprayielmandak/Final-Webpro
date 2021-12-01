import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PokemonDetail from '../components/PokemonDetail';

function Detail() {
    const [pokemon, setPokemon] = useState({});
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://api.pokemontcg.io/v2/cards/${id}`)
        .then(response => response.json())
        .then(data => setPokemon(data.data))
    }, // eslint-disable-next-line 
    []);
    
    return(
        <>
            <Navigation />
            <PokemonDetail pokemon={pokemon} />
            <Footer />
        </>
    );
}

export default Detail;
