import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// we are using bootstrap navbar
const Header = () => {


    return (
        <>
            <nav className="navbar navbar-light" style={{boxShadow:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', backgroundColor:'#b19ff9'}}>
                <div className="container-fluid">
                    <h1 className="navbar-brand" href='/'><b>DATA-DASH</b></h1>
                    <div className="d-flex">
                        <a className="btn" style={{marginRight: '0.5rem'}} href='/'><FontAwesomeIcon icon={faInstagramSquare} size='2x' /></a>
                        <a className="btn" style={{marginRight: '0.5rem'}} href='/'><FontAwesomeIcon icon={faGithubSquare} size='2x'/></a>
                        <a className="btn" style={{marginRight: '0.5rem'}} href='/'><FontAwesomeIcon icon={faLinkedinIn} size='2x'/></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header