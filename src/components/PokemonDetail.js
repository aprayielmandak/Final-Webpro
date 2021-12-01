import React from 'react';

function PokemonDetail(props) {
    return(
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
                    <div className="col">
                        <div className="detail" style={{float:"right", color :"black"}}>
                        <h2 className="card-text mb-3" >Number:{props.pokemon.number}</h2>
                        <h2 className="card-text mb-3" >Name:{props.pokemon.name}</h2>    
                        <h2 className="card-text mb-3" >Types:{props.pokemon.types}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetail;
