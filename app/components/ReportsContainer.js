import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReports, openModal } from '../actions/actions'
import Report from './Report'

class ReportsContainer extends Component {
  constructor(props) {
    super(props)
    this.openPreviewModal = this.openPreviewModal.bind(this);
  }
  // componentDidMount() {
  //   this.props.dispatch(fetchReports());
  // }
  openPreviewModal(props) {
    this.props.dispatch(openModal("PREVIEW", props))
  }
  render() {
    const filteredReports = this.props.reports.filter(rep => {
      return rep.author && rep.title && rep.subtitle && rep.content;
    })
    const reports = filteredReports.map((report, i) => {
      return <Report 
                key={i} 
                report={report}
                handleClick={()=>this.openPreviewModal(report)} />
    })
    return (
    <div>{reports}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return { reports: state.reducer.reports,
           modal: state.modal }
}

export default connect(mapStateToProps)(ReportsContainer);