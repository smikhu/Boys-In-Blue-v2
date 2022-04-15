import chelsea from '../images/chelsea.png'
function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <div>
                    <a href="#" 
                        className="navbar-brand mb-0 h1">
                        <img className="d-inline-block" width="100" height="100" src={chelsea}></img>
                    </a>
                        <span className="h2">CHELSEA F.C.</span>
                </div>

                <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Navigation toggle" className="navbar-toggler">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse justify-content-md-end navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active" href="#">HOME</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">TEAM</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">TROPHIES</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">FIXTURES</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;