import React, {Component} from 'react'
import { Collapse, Navbar, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, NavbarToggler,FormFeedback } from 'reactstrap';
import { BrowserRouter, Link, NavLink, withRouter } from 'react-router-dom';
import axios from 'axios';


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
<<<<<<< Updated upstream
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.changelink = this.changelink.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
=======
>>>>>>> Stashed changes
    }

    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
<<<<<<< Updated upstream
    handleLoginClick() {
        this.setState({isLoggedIn: true,isModalOpen: !this.state.isModalOpen,});
        
      }
=======
    toggleModal1 = () => {
        this.setState({
            isModalOpen1: !this.state.isModalOpen1,
        });
    }
    handleLoginClick = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            this.setState({
                isLoggedIn: response.data.success,
            })
            this.props.getToken(response.data.token)
            console.log(this.state);
        })
        .catch(err => {
            console.log(err)
        })
        if(this.state.isLoggedIn) {
            this.props.history.push(`http://localhost:3001/${this.props.changedValue}`)
        }
    }
>>>>>>> Stashed changes
    
    handleLogoutClick = () => {
        this.setState({isLoggedIn: false});
    }

<<<<<<< Updated upstream
    changelink=(event)=>{
=======
    handleSignUpClick = () => {
        this.setState({isModalOpen1: !this.state.isModalOpen1,});
    }

    changelink = (event) => {
>>>>>>> Stashed changes
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
                                <Link className="nav-link" to="/login">
                                    <span className="fa fa-sign-in-alt fa-lg"></span> Login 
                                </Link>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
<<<<<<< Updated upstream
                <Modal backdrop="static" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>   
=======
                {/* <Modal backdrop="static" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>   
>>>>>>> Stashed changes
                        Login         
                        <Button className="close me" variant="secondary" onClick={this.toggleModal} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button>
                    </ModalHeader>
                    
                    <ModalBody>
                        <Form className="myForm" onSubmit={this.handleLoginClick}>
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
<<<<<<< Updated upstream
                            <Link to={this.props.changedValue}><Button type="submit" value="submit" color="primary" onClick={this.handleLoginClick} ><span className="fa fa-sign-in-alt fa-lg"></span>Login</Button></Link>
=======
                            <Link onClick={this.handleLoginClick} to={this.props.changedValue}><Button type="submit" value="submit" color="primary"  ><span className="fa fa-sign-in-alt fa-lg"></span>Login</Button></Link>
                        </Form>
                    </ModalBody>
                </Modal> */}
                <Modal backdrop="static" isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>
                    <ModalHeader>   
                        SignUp         
                        <Button className="close me" variant="secondary" onClick={this.toggleModal1} color="white">
                            <span aria-hidden="true" className="white-text"></span><i className="fa fa-times"></i>
                        </Button>
                    </ModalHeader>
                    
                    <ModalBody>
                        <Form className="myForm" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Set Username(Only SID)</Label>
                                <Input required type="text" id="username" name="username" value={this.state.username}
                                    onChange={this.handleInputChange} valid={errors.username === ''} invalid={errors.username !== ''} onBlur={this.handleBlur('username')} />
                                    <FormFeedback>{errors.username}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Set Password</Label>
                                <Input required type="password" id="password" name="password" value={this.state.password}
                                   onChange={this.handleInputChange} valid={errors.password === ''} invalid={errors.password !== ''} onBlur={this.handleBlur('password')} 
                                   innerRef={(input) => this.password=input} />
                                   <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary" onClick={this.handleSignUpClick} ><span className="fa fa-sign-in-alt fa-lg"></span>Sign Up</Button>
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
export default Bar;
=======
function SignupButton(props){
    return (<Link className="nav-link" onClick={props.onClick}><span className="fa fa-sign-in-alt fa-lg"></span> SignUp</Link>);
}
export default withRouter(Bar);
>>>>>>> Stashed changes
