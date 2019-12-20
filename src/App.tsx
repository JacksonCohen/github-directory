import React, { Component } from 'react';
import Search from './components/Search';
import UserProfile from './components/UserProfile';

export class App extends Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='sign-in'>
          <a href='https://github.com/login/oauth/authorize?client_id=6f7c14d6f3a82966cbb6'>
            Sign In Using GitHub
          </a>
        </div>
      </div>
    );
  }
}

export default App;
