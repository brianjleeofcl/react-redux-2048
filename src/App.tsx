import * as React from 'react';
import CallAPI from './store/actions/API';
import './App.css';
import Board from './board/Board';
import User from './classes/user.interface';
import State from './classes/state.interface';
import { connect } from 'react-redux';
const loading = require('./loading.svg');

interface StateProps {
  user: User;
}

interface DispatchProps {
  getUser: () => void;
}

class App extends React.Component<StateProps & DispatchProps, {}> {
  render() {
    const {user} = this.props;
    if (!user.userId) return (<div className="App">
      <img src={loading} className="App-loading"/>
    </div>)
    else return (
      <div className="App">
        <div className="App-header">
          <h1>2048</h1>
          <h5>Welcome, {user.name}</h5>
        </div>
        <Board/>
      </div>
    );
  }

  componentDidMount() {
    if (!this.props.user.userId) this.props.getUser()
  }
}

function mapStatetoProps(state: State): StateProps {
  return { user: state.user }
}

function mapDispatchtoProps(dispatch:any): DispatchProps {
  return {
    getUser: (): void => dispatch(CallAPI({url: '/api/users/', method: 'GET', handler:'USER'}))
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
