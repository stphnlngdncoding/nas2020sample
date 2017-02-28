import React from 'react';
// import styles from './App.css';
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import ModalRoot from './ModalRoot'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  componentDidMount() {
    // const request = new Request('http://localhost:3000/report',
    // {
    //   headers: new Headers({
    //     'Content-Type': 'application/json'
    //   })
    // })
    // fetch(request)
    //   .then((response) => {
    //     return response.json()
    //   })
    //   .then((reports) => {
    //     this.setState({ reports: reports })
    //   })
  }
  render() {
    return (
      <div>
        <ModalRoot />
        <Nav bsStyle="pills" activeKey={1}>
          <LinkContainer to={{pathname: '/reports'}}>
            <NavItem eventKey={1}> View Report </NavItem>
          </LinkContainer>
          <LinkContainer to={{pathname: '/createReport'}}>
            <NavItem eventKey={2}> Create Reports </NavItem>
          </LinkContainer>
        </Nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
