import React from 'react';
// import styles from './App.css';
import { Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import ModalRoot from './ModalRoot'
import { fetchReports } from '../actions/actions'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.dispatch(fetchReports())
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
          <LinkContainer to={{pathname: '/table'}}>
            <NavItem eventKey={3}>View Table</NavItem>
          </LinkContainer>
        </Nav>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {reports: state.reducer.reports}
}
export default connect(mapStateToProps)(App)