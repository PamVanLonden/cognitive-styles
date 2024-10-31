import React from 'react';
import html2canvas from 'html2canvas';
import UPNG from 'upng-js';
import { PiDownloadFill } from "react-icons/pi";

export const ScreenshotButton = () => {
  const takeScreenshot = async () => {
    const mainElement = document.querySelector('main');

    const sliders = document.querySelectorAll('input[type="range"]');
    sliders.forEach(slider => {
      slider.classList.add('screenshot-slider');
    });

    if (mainElement) {
      const canvas = await html2canvas(mainElement, {
        backgroundColor: null,
        scale: 1,
        useCORS: true,
      });

      const ctx = canvas.getContext('2d');
      const scale = canvas.width / mainElement.offsetWidth;

      // Calculate and draw each thumb position
      sliders.forEach(slider => {
        const sliderRect = slider.getBoundingClientRect();
        const mainRect = mainElement.getBoundingClientRect();

        const sliderValue = parseFloat(slider.value);
        const sliderMin = parseFloat(slider.min) || 0;
        const sliderMax = parseFloat(slider.max) || 100;
        const sliderWidth = sliderRect.width;

        const thumbPosition = ((sliderValue - sliderMin) / (sliderMax - sliderMin)) * sliderWidth;

        // Calculate thumb coordinates relative to the canvas
        const thumbX = (sliderRect.left - mainRect.left + thumbPosition) * scale;
        const thumbY = (sliderRect.top - mainRect.top + sliderRect.height / 2) * scale;
        const adjustedThumbY = thumbY - -193 * scale; // Adjust negative value to push thumb down to the slider.  

        // Draw the thumb circle
        ctx.beginPath();
        ctx.arc(thumbX, adjustedThumbY, 10 * scale, 0, 2 * Math.PI);
        ctx.fillStyle = getComputedStyle(slider).getPropertyValue('--purple') || '#6a1b9a';  // fallback color
        ctx.fill();
        ctx.lineWidth = 2 * scale;
        ctx.strokeStyle = getComputedStyle(slider).getPropertyValue('--purple') || '#6a1b9a';
        ctx.stroke();
      });

      const rawImageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      const compressed = UPNG.encode([rawImageData.buffer], canvas.width, canvas.height, 128);

      const blob = new Blob([compressed], { type: 'image/png' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'compressed-survey-summary.png';
      link.click();

      // Remove temporary styles after screenshot
      sliders.forEach(slider => {
        slider.classList.remove('screenshot-slider');
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
