import * as React from 'react';
import {Link} from 'react-router-dom';

export interface NavBarProps { }

const NavBar: React.SFC<NavBarProps> = () => {
    return (
        <>
        <div className="logoBar row justify-content-md-center sticky-top">
            <div className="header col-md-12 p-2">
                <p className="text-center m-2 mt-4">Chirper</p>
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-blueCh" to="/add">Add Chirp</Link>
                    <Link className="btn btn-blueCh" to="/">All Chirps</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default NavBar;