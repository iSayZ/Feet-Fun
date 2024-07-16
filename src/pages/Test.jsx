import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

function Test() {
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);
  
    const capture = () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImage(imageSrc);
    };

    const deletePic = () => {
        setImage(null)
    }

    const uploadImage = async () => {
        if (image) {
          try {
            const response = await axios.post('/upload', { image });
            console.log('Image uploaded:', response.data);
          } catch (error) {
            console.error('Error uploading image', error);
          }
        }
      };

    const videoConstraints = {
        facingMode: { exact: "environment" }
      };
  
    return (
      <div className="App">
        <div className="webcam-container">
            {image ? <img src={image} alt="Captured" /> :  
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam"
            screenshotQuality={1}
            videoConstraints={videoConstraints}
          />
            }
        </div>
        <button onClick={capture}>Capture Photo</button>
        {image &&       
        <>
            <button onClick={deletePic}>Delete Photo</button>
            <button onClick={uploadImage}>Upload Photo</button>
        </>  
        }
      </div>
  );
}

export default Test;

// import React, { useRef, useState } from 'react';

// function Test() {
//   const videoRef = useRef(null);
//   const [image, setImage] = useState(null);

//   const startCamera = async () => {
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     videoRef.current.srcObject = stream;
//   };

//   const capturePhoto = () => {
//     const canvas = document.createElement('canvas');
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;
//     const context = canvas.getContext('2d');
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
//     const imageData = canvas.toDataURL('image/png');
//     setImage(imageData);
//   };

//   return (
//     <div className="Test">
//       <button onClick={startCamera}>Start Camera</button>
//       <video ref={videoRef} autoPlay></video>
//       <button onClick={capturePhoto}>Capture Photo</button>
//       {image && <img src={image} alt="Captured" />}
//     </div>
//   );
// }

// export default Test;