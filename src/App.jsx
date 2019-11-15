import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Posts from './components/Posts';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        username: '',
      },
      session: {
        session_key: '',
      }
    }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleSignUp(firstName, lastName, email, username, password) {
    const url = '';
    let signUpData = {
      'user': {
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'username': username,
        'password': password
      }
    };
    fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: signUpData
      }
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        user: {
          id: data.id,
          firstName: firstName,
          lastName: lastName,
          username: username,
        }
      })
    })
    .then(this.handleLogIn(email, password))
  }

  handleLogIn(email, password) {
    const url = '';
    let signInData = {
      'session': {
        'email': email,
        'password': password
      }
    };
    fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: signInData
      }
    )
    .then(response => response.json())
    .then(data => {
      this.setState({
        session: {
          user_id: data.user_id,
          session_key: data.session_key
        }
      });
    })
  }

  handleLogOut() {
    // Destroy session
    // Then set isLoggedIn to false
    alert('Logout button was clicked')
  }

  render() {
    return (
      <div className="App">
        <Navbar
          isLoggedIn={this.state.isLoggedIn}
          handleLogIn={this.handleLogIn}
          handleLogOut={this.handleLogOut}
        />
        <Sidebar
          isLoggedIn={this.state.isLoggedIn}
          handleSignUp={this.handleSignUp}
          session={this.state.session}
          user={this.state.user}
        />
        <Posts
          isLoggedIn={this.state.isLoggedIn}
          session={this.state.session}
        />
      </div>
    );
  }

}

export default App;
