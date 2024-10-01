import React from 'react';
import html2canvas from 'html2canvas';
import { PiDownloadFill } from "react-icons/pi";

export const ScreenshotButton = () => {
  const takeScreenshot = () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      html2canvas(mainElement).then((canvas) => {
        // Convert the canvas to a Blob (for save-as dialog)
        canvas.toBlob((blob) => {
          const link = document.createElement('a');
          link.href = URL.createObjectURL(blob);
          link.download = 'cognitive-facets-survey.png'; // Filename for the downloaded image
          link.click(); // Trigger the download
        });
      });
    }
  };

  return (
    <>
      <button className="download" onClick={takeScreenshot}>Download Summary <PiDownloadFill /> (.png)</button>
    </>
  );
};


