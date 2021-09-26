import React, { useContext, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from '../context/UserContext';
import "../App.css"


const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => {
        SetIsOpen(!isOpen);
    }

    // console.log(context); 

   

    return (
        <Navbar color="info" light expand="sm" >
            <NavbarBrand><Link className="text-white myLink" to="/">Gitfire App</Link></NavbarBrand>

            <NavbarText className="text-white">{context.user?.email ? context.user.email : ""}</NavbarText>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>

                <Nav className="ml-auto" navbar >
                    {
                        context.user ? 
                        (
                            <NavItem>
                                <NavLink onClick={() => {context.setUser(null)}}  className="text-white myLink">Log Out</NavLink>
                            </NavItem>
                        ) :
                        (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/signup" className="text-white " >Sign Up</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/signin" className="text-white">Sign In</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/authenticate" className="text-white ">Sign In with Google</NavLink>
                                </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Header;