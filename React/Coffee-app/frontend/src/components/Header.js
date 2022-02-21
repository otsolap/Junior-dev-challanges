import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../imgs/Avatar_sm.png'

export default function Header() {
    return (
        <Navbar variant="dark" bg="dark">
            <Navbar.Brand
                className="social-media-icon text-center w-100"
            >
                <img
                    src={logo}
                    width="80px"
                    height="80px"
                    className="d-inline-block"
                    alt="Otso Lappalainen | Kultakammen"
                />
                <i>I &#9829; Coffee</i>
            </Navbar.Brand>
        </Navbar>
    )
}
