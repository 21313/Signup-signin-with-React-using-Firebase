import React, { Component } from 'react';
import {Link} from 'react-router';
class App extends Component {
  render() {
    return (
      <div>
       <Link to="/signin"><button>SignIn</button></Link>
       <Link to="/signup"><button>SignUp</button></Link>
       <div>
        {this.props.children}
       </div>
      </div>
    );
  }
}
export default App;
