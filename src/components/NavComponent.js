import React, {Component} from 'react'
import { Collapse, Navbar, Nav, NavItem, NavLink, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarToggler } from 'reactstrap';
import { BrowserRouter, Link } from 'react-router-dom';



class Bar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    render(){
    return (
        <div>
            <Navbar light expand="md">
                <NavbarToggler onClick={this.toggleNav}/>
                    <div className="container-fluid">
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar-expand-lg">
                                <NavItem className="navbar-expand-lg ">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home 
                                    </NavLink>
                                </NavItem>
                                <NavItem className="navbar-expand-lg ">
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-book fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick={this.toggleModal} >
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal backdrop="static" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>   
                        Login         
                        <Button className="close" variant="secondary" onClick={this.toggleModal}>
                            <span aria-hidden="true" className="white-text"></span><i class="fa fa-times"></i>
                        </Button>
                    </ModalHeader>
                    
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="select">Login As</Label>
                                <Input type="select" id="select" name="select"
                                    innerRef={(input) => this.loginAs=input} >
                                    <option defaultValue>--Select--</option>
                                    <option>Admin</option>
                                    <option>Student</option>
                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember=input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <BrowserRouter><Link to="/admin"><Button type="submit" value="submit" color="primary"><span className="fa fa-sign-in fa-lg"></span>Login</Button></Link></BrowserRouter>
                            
                        </Form>
                    </ModalBody>
                </Modal>
        </div>
    )
}
}

export default Bar;