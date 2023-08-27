import React, { useState } from 'react';
import FileUpload from './FileUpload';

const HomePage = () => {
  const [skinType, setSkinType] = useState(null);
  const [acne, setAcne] = useState(null);
  const [reportUrl, setReportUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const generateReport = async (skinType, acneType) => {
    try {
      const response = await fetch(`http://localhost:5000/report?skin_type=${skinType}&acne_type=${acneType}`);
      const data = await response.json();
      setReportUrl(data.report_url);
      setImageUrl(data.image_url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <FileUpload generateReport={generateReport} setSkinType={setSkinType} setAcne={setAcne} />
      {skinType && acne && reportUrl && imageUrl && (
        <ReportPage skinType={skinType} acneType={acne} reportUrl={reportUrl} imageUrl={imageUrl} />
      )}
    </div>
  );
};

export default HomePage;
