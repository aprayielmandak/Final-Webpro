import Navigation from '../components/Navigation';
import Footer from '../components/Footer'

function About(){
    return (
        <>
            <Navigation />
                <div className="ms-5 me-5 mb-5" style={{color:"black", backgroundColor:"pink", padding:"10px 10px"}}>
                <h1>About</h1>
                <h4>About App</h4>
                <p>Get Card Pokemon</p>
                <p>Bermain Pokemon dengan bentuk kartu yang lengkap</p>
                <h4>About Me</h4>
                <p>Mandak, Aprayiel Kezia Elsye</p>
                <p>105011910109</p>
                <p>Sistem Informasi</p>
                <h4>Subjek</h4>
                <p>Web Programming / A</p>
                <p>Final Project</p>
                </div>
            <Footer />
        </>
    );
}
export default About;