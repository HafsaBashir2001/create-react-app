import React from 'react';

const Report = ({ reportUrl, imageUrl }) => {
  return (
    <div>
      <h1>Report</h1>
      <p>Here's your report:</p>
      <img src={imageUrl} alt="Report" />
      <p>Download the full report <a href={reportUrl}>here</a>.</p>
    </div>
  );
};

export default Report;
