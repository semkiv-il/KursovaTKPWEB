import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const MenuComponent = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <img/>
            <Container>
                <Navbar.Brand href="/">Електрон</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Головна</Nav.Link>
                    
                    <Nav.Link href="/price">Прайс-лист</Nav.Link>
                    <Nav.Link href="/about">Про нас</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MenuComponent;
