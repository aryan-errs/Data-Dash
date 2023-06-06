import React from 'react'

// we are using bootstrap navbar
const Header = () => {
    

    return (
        <>
            <nav className="navbar navbar-light" style={{boxShadow:'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px', backgroundColor:'#b19ff9'}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>Data-Dash</a>
                    <form className="d-flex input-group w-auto" >
                        <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" class="btn btn-outline-dark">search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header