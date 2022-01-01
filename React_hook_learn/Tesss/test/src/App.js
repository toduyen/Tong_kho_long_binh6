import logo from './logo.svg';
import './App.css';
import React from "react";
import Webcam from "react-webcam";
const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};
function App() {
   const webcamRef = React.useRef(null);
   const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(imageSrc)
    },
    [webcamRef]
  );
  return (
    <div className="App">
       <Webcam
        audio={false}
        height={720}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
    </div>
  );
}

export default App;
