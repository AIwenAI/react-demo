import React from 'react';
import ReactDOM from 'react-dom';

const Login = (props) => {
  return (
    <button onClick={ props.onClick } >登录</button>
  )
}

const Leave = (props) => {
  return (
    <button onClick={ props.onClick } >退出</button>
  )
}

class LoginCentent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    }

    this.loginClick = this.loginClick.bind(this)
    this.leaveClick = this.leaveClick.bind(this)
  }

  loginClick() {
    this.setState({ isLogin: true })
  }

  leaveClick() {
    this.setState({ isLogin: false })
  }

  render() {
    if(this.state.isLogin){
      return <Leave onClick={ this.leaveClick } />
    } else {
      return <Login onClick={ this.loginClick } />
    }

  }
}

ReactDOM.render(
  <LoginCentent />,
  document.getElementById('root')
)
