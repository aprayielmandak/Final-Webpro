import React, {useState, useEffect} from 'react';
import PokemonList from './PokemonList';

function Pokemon() {
    const [pokemons, setPokemon] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('https://api.pokemontcg.io/v2/cards')
        .then(response => response.json())
        .then(data => setPokemon(data.data))
    }, []);
    
    const handleChange = e => {setText(e.target.value)};

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://api.pokemontcg.io/v2/cards${"?q=name:" + text}`)
        .then(response => response.json())
        .then(data => setPokemon(data.data))

        setText('');
    }

    return(
        <>
        <div className="ms-5 me-5 ps-5 pe-5">
            <h2 style={{color:"black", backgroundColor:"pink", textAlign:"center"}}><b>Search Cards</b></h2>
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" onChange={handleChange} value={text} />
            </form>
        </div>
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    {pokemons.map((pokemon) => <PokemonList key={pokemon.id} pokemon={pokemon} />)}
                </div>
            </div>
        </div>
        </>
    );
}

export default Pokemon;
