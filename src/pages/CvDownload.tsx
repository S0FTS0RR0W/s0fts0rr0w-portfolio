import React from 'react';
import './CvDownload.css'; // Import the new CSS file

const DownloadCV = () => {
  const cvUrl = '/s0fts0rr0w-cv.pdf';

  React.useEffect(() => {
    const link = document.createElement('a');
    link.href = cvUrl;
    link.setAttribute('download', 's0fts0rr0w-cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="cv-download-container">
      <h1>Downloading CV</h1>
      <p>Your download should start automatically. If it doesn't, you can <a href={cvUrl} download="s0fts0rr0w-cv.pdf">click here to download it</a>.</p>
    </div>
  );
};

export default DownloadCV;