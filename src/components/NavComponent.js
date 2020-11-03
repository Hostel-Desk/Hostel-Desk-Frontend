import React, { Component } from 'react'
import { Navbar } from 'reactstrap';
import { Link } from 'react-router-dom';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
            isModalOpen1: false,
            username: '',
            password: '',
            id: '',
            touched: {
                username: false,
                password: false
            }
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }
    toggleModal1() {
        this.setState({
            isModalOpen1: !this.state.isModalOpen1,
        });
    }

    handleLogoutClick() {
        this.props.logoutUser();
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
        event.preventDefault();
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }

    validate = (username, password, id) => {
        const errors = {
            username: '',
            password: '',
            id: ''
        }
        if (this.state.touched.username && username.length < 3)
            errors.username = 'Username should be of minimum length of 3 characters';
        else if (this.state.touched.username && username.length > 30)
            errors.username = 'Username should not be greater than 30 characters';
        else if (this.state.touched.password && password.length < 8)
            errors.password = 'Password should be of minimum length of 8 characters';
        return errors;
    }

    render() {

        const isLoggedIn = this.props.auth.isAuthenticated;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton />;
        }
        return (
            <div>
                <Navbar light expand="md" className="me">
                    <div className="container-fluid">
                        <ul className="mr-auto nav me">
                            <li className="nav-item">
                                <Link className="nav-link me" to="/home">
                                    <span className="fa fa-home fa-lg"></span> Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me" to="/contactus">
                                    <span className="fa fa-address-book fa-lg"></span> Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                {button}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link me" to="/login">
                                    <span className="fa fa-tachometer-alt"></span>Go to DashBoard
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Navbar>
            </div>
        )
    }
}

function LoginButton(props) {
    return (<Link className="nav-link me" to="/login"><span className="fa fa-sign-in-alt fa-lg"></span> Login</Link>);
}

function LogoutButton(props) {
    return (<Link to="/home" className="nav-link me" onClick={props.onClick}><span className="fa fa-sign-out-alt fa-lg"></span> Logout</Link>);
}

export default Bar;