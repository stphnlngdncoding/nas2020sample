import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Router, Route, hashHistory } from 'react-router';
import ReportsContainer from './components/ReportsContainer';
import CreateReportContainer from './components/CreateReportContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers/reducer';
import { fetchReports } from './actions/actions'
import { reducer as formReducer } from 'redux-form';
import modalReducer from './reducers/modalReducer';
import ModalRoot from './components/ModalRoot';

const rootReducer = combineReducers({
  modal: modalReducer,
  reducer,
  form: formReducer
});


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// store.dispatch(fetchReports()).then(()=>{
//   console.log("dispatched")

// });

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <Route path='/reports' component={ReportsContainer}/>
        <Route path='/createReport' component={CreateReportContainer}/>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root'));
