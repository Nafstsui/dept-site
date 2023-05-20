// import '../index.css'

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top my-nav-style">
                <div className="container-fluid">
                    <nav className="navbar-brand"> <img src="./logo.png" alt="logo" width="65px" /> </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://drive.google.com/folderview?id=1HJbafFXKfHR4RGsyNtfhvTKb6iSdCCGc">Courses Matrials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://nafstsuipress.wordpress.com"> Blogs </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-food-tech"> About </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar