import {Link} from 'react-router-dom';

function PokemonList(props) {
    return(
        
        <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src={props.pokemon.images.small} alt="Generic placeholder image" width="150" height="300"></img>
                <div className="card-body" style={{backgroundColor:"black"}}>
                    <h2 className="card-text mb-3" style={{color:"pink"}}>{props.pokemon.name}</h2>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <p><Link className="btn btn-sm btn-outline-secondary" style={{backgroundColor:"pink"}} to={`/Detail/${props.pokemon.id}`}>View details</Link></p>
            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonList;
