import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table-2';
import { connect } from 'react-redux';
import '../../node_modules/fixed-data-table-2/dist/fixed-data-table.css'

const rows = [];

// for (let i = 0; i < 20; i++) {
//   rows[i] = [];
//   rows[i].push(`a${i}`, `b${i}`, `c${i}`)
// }

const openPreviewModal = (props) => {
  console.log("open preview modal clicked");
  props.dispatch(openPreviewModal("PREVIEW", props))
}

const CustomTable = (props) => {
  const rawReports = props.reports || [];
   const reports = rawReports.filter(rep => {
      return rep.author && rep.title && rep.subtitle && rep.content;
    })
  return (
    <Table
      rowHeight={50}
      rowsCount={reports.length}
      width={1000}
      height={800}
      headerHeight={50}>
      <Column
        header={<Cell>Author</Cell>}
        cell={({rowIndex, ...props}) => {
          return (<Cell
          >{reports[rowIndex]["author"]}</Cell>)
        }}
        width={240}
        />
      <Column
        header={<Cell>Title</Cell>}
        cell={({ rowIndex }) => {
              return (<Cell>{reports[rowIndex]["title"]}</Cell>)
          }}
        width={240}
        />
      <Column
        header={<Cell>Col 3</Cell>}
        cell={({rowIndex, ...props}) => (
          <Cell {...props}>
            {reports[rowIndex]["subtitle"]}
          </Cell>
        )}
        width={240}
        />
      <Column
        header={<Cell>Content</Cell>}
        cell={({ rowIndex }) => (
          <Cell>
            {reports[rowIndex]["content"]}
          </Cell>
        )}
        width={240}
        />
      <Column 
        header={<Cell>Preview</Cell>}
        cell={({ rowIndex }) => (<Cell
        ></Cell>)}
        width={40}
        />
      </Table>
  )
}

export default connect(state => state.reducer)(CustomTable);