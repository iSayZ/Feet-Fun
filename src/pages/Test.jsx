import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function Test() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
    <div className="Test">
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}>Capture Photo</button>
      {image && <img src={image} alt="Captured" />}
    </div>
  );
}

export default Test;