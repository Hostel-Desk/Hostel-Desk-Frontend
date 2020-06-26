import React from 'react'
import Header from './Header'
import Bar from './NavComponent'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input 
  } from 'reactstrap';


function Main(){
    return (
        <div>
            <Header />
            <Bar />
        </div>
    )
}

export default Main;