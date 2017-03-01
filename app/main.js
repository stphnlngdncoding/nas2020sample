import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
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
import CustomTable from './components/CustomTable'

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
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={CreateReportContainer} />
        <Route path='/reports' component={ReportsContainer}/>
        <Route path='/createReport' component={CreateReportContainer}/>
        <Route path='/table' component={CustomTable}/>
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root'));
