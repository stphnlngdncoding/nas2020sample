import React, { Component } from 'react';

const Report = ({ report, handleClick }) => {
  return (
    <div onClick={handleClick} style={{paddingTop: "10px"}}>
      <div onClick={handleClick}>{report.title}</div>
      <div>{report.author}</div>
      <div>{report.subtitle}</div>
      <div>{report.content}</div>
    </div>
  )
}

export default Report