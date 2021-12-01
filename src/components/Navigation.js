import {Link} from 'react-router-dom';

function Navigation() {
    return(
        <div className = "navbar navbar-expand-md mb-5" style={{backgroundColor:"black"}}>
            <div className="ms-5 me-5">
                <Link className="navbar-brand" style={{color:"pink", fontSize:"30px"}} to="/"><b>Card Pokemon</b></Link>
                <div className="row" style={{float:'right'}}>
                    <Link className="col nav-link active" style={{color:"white"}} aria-current="page" to="/">Home</Link>
                    <Link className="col nav-link" style={{color:"white"}} to="/about">About</Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
