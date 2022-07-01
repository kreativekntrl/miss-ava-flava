import logo from '../images/logo.jpg';
const Nav = () => {
    return(
        <div>  
            <i> <img 
            style={{width: "70px", height: "70px"}}
            src={logo}
            alt="logo"></img></i> 
            <h1 style={{margin: "0"}}>MISS AVA FLAVA</h1>
            <hr /> 
        </div>
    );
}
export default Nav;