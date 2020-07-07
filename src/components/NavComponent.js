import React, {Component} from 'react'
import { Collapse, Navbar, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarToggler,FormFeedback } from 'reactstrap';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';




class Bar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isNavOpen: false,
            isModalOpen: false,
            username: '',
            id: '',
            isLoggedIn: false,
            touched: {
                username: false
            }
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.changelink = this.changelink.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true,isModalOpen: !this.state.isModalOpen,});
        
      }
    
      handleLogoutClick() {
        this.setState({isLoggedIn: false});
      }

    changelink=(event)=>{
        if (event.target.value==="Admin"){
            this.props.changelink("/admin");
        }
        if (event.target.value==="Student"){
            this.props.changelink("/student");
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        console.log("State: " + JSON.stringify(this.state));
        alert("Current state: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    validate = (username, id) => {
        const errors = {
            username: '',
            id: ''
        }
        if(this.state.touched.username && username.length < 3)
            errors.username = 'Username should be of minimum length of 3 characters';
        else if(this.state.touched.username && username.length > 30)
            errors.username = 'Username should not be greater than 30 characters';

        return errors;
    }

    

    render(){
        
        const errors = this.validate(this.state.username);
        const isLoggedIn = this.state.isLoggedIn;
        let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.toggleModal }/>;
    }
    return (
        <div>
            <Navbar light expand="md" className="me">
            <div className="container-fluid">
                <NavbarToggler onClick={this.toggleNav}/>
                    
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="navbar-expand-lg">
                                <NavItem className="navbar-expand-lg ">
                                    <Link className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home 
                                    </Link>
                                </NavItem>
                                <NavItem className="navbar-expand-lg ">
                                    <Link className="nav-link" to="/contactus">
                                        <span className="fa fa-address-book fa-lg"></span> Contact Us
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    {button}
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Modal backdrop="static" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>   
                        Login         
                        <Button className="close me" variant="secondary" onClick={this.toggleModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button>
                    </ModalHeader>
                    
                    <ModalBody>
                        <Form className="myForm" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input required type="text" id="username" name="username" value={this.state.username}
                                    onChange={this.handleInputChange} valid={errors.username === ''} invalid={errors.username !== ''} onBlur={this.handleBlur('username')} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password=input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="select">Login As</Label>
                                <Input type="select" id="select" name="select"
                                    innerRef={(input) => this.loginAs=input}  onChange={this.changelink} >
                                    <option value="">--Select--</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Student">Student</option>
                                </Input>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember=input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Link to={this.props.changedValue}><Button type="submit" value="submit" color="primary" onClick={this.handleLoginClick} ><span className="fa fa-sign-in-alt fa-lg"></span>Login</Button></Link>
                        </Form>
                    </ModalBody>
                </Modal>
        </div>
    )
}
}



function LoginButton(props){
    return (<Link className="nav-link" onClick={props.onClick}><span className="fa fa-sign-in-alt fa-lg"></span>Login</Link>);
}  
function LogoutButton(props){
    return (<Link to="/home" className="nav-link" onClick={props.onClick}><span className="fa fa-sign-out-alt fa-lg"></span>Logout</Link>);
}

export default Bar;