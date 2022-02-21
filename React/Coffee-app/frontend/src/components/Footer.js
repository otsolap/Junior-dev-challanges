import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from '../imgs/Avatar_sm.png'
import { faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import hoverLogo from '../imgs/Avatar_sm_whyte.png'

export default function Footer() {
    return (
        <Container role="footer"
            className="pt-3 justify-content-md-center bg-dark">
            <p className="text-center text-light">Otso Lappalainen | for Alma Dev</p>
            <Row>
                <Col
                    sm={12}
                    className="text-center"
                >
                    <a
                        target="_blank"
                        href="https://www.kultakammen.fi"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={logo}
                            onMouseOver={e => (e.currentTarget.src = hoverLogo)}
                            onMouseOut={e => (e.currentTarget.src = logo)}
                            className="social-media-img"
                            alt="Otso Lappalainen | Kultakammen"
                        />
                    </a>
                    <a
                        className="social-media-icon"
                        target="_blank"
                        href="https://www.linkedin.com/in/otsolap/"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="brand-color"
                            aria-label="LinkedIn profile"
                            icon={faLinkedin} />
                    </a>
                    <a
                        className="social-media-icon"
                        target="_blank"
                        href="https://github.com/otsolap"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                            className="brand-color"
                            aria-label="Github profile"
                            icon={faGithub} />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}
