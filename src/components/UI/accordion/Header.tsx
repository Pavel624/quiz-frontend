import React from 'react';
import {Container, Navbar} from "react-bootstrap";

interface HeaderProps {

}
const Header: React.FC<HeaderProps> = (props) => {
    return (
        <Navbar fixed="top" bg="light">
            <Container>
                <Navbar.Brand href="#home">Quiz</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default Header;