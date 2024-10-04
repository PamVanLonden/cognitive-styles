import React from 'react';
import html2canvas from 'html2canvas';
import Pica from 'pica';
import { PiDownloadFill } from "react-icons/pi";

export const ScreenshotButton = () => {
  const takeScreenshot = async () => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      const canvas = await html2canvas(mainElement);
      const pica = new Pica();
      const outputCanvas = document.createElement('canvas');
      
      // Set dimensions for the output canvas (smaller dimensions for compression)
      outputCanvas.width = canvas.width / 2;  // Adjust the factor as needed
      outputCanvas.height = canvas.height / 2; // Adjust the factor as needed

      // Resize the image using Pica
      pica.resize(canvas, outputCanvas).then(() => {
        return pica.toBlob(outputCanvas, 'image/png', 0.8); // Adjust quality
      }).then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'cognitive-facets-survey-summary.png';
        link.click();
      });
    }
  };

  return (
    <>
      <button role="button"
        className="download" 
        onClick={takeScreenshot}
        aria-label="Download the survey summary to a PNG file."
        >Download Summary <PiDownloadFill /> (.png)</button>
    </>
  );
};


