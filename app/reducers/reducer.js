import { ADD_REPORT, REQUEST_REPORTS, RECEIVE_REPORTS } from '../actions/actions';

const report = (state = {
  isFetching: false,
  didInvalidate: false,
  reports: []
}, action) => {
  switch (action.type) {
    case 'RECEIVE_REPORTS': 
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        reports: action.reports,
        lastUpdated: action.receivedAt
      })
    default:
      return state;
  }
}

export default report;