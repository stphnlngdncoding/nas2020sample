const ADD_REPORT = 'ADD_REPORT';
const REQUEST_REPORTS = 'REQUEST_REPORTS';
const RECEIVE_REPORTS = 'RECEIVE_REPORTS';

export function addReport(valueObj) {
  return { type: ADD_REPORT, valueObj }
}


export function requestReports() {
  return {
    type: REQUEST_REPORTS
  }
}

export function receiveReports(reports, json) {
  return {
    type: RECEIVE_REPORTS,
    reports: json.map(report => { 
      return {
        title: report.title, 
        author: report.author, 
        content: report.content,
        subtitle: report.subtitle
      }
    }),
    receivedAt: Date.now()
  }
}

export function fetchReports() {
  return function (dispatch) {
    dispatch(requestReports())
    return fetch('http://localhost:3000/report')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveReports("reports", json))
      })
  }
}

export function openModal(type, props) {
  console.log("modal action dispatched. type:", type, "props:", props)
  return {
    type: "SHOW_MODAL",
    modalType: type,
    modalProps: props
  }
}

export function closeModal() {
  return {
    type: 'CLOSE_MODAL'
  }
}