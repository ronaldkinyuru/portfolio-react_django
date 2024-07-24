import React, { useState } from 'react';

function FileUpload() {
    
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    
    if (file) {
      console.log('Uploading file:', file);
     } else {
      console.log('No file selected');
    }
  };

  return (
    <div style={{marginTop:60, marginLeft:600}}>
      <input type="file" onChange={handleFileChange} />
      <button style={{borderColor:'#1E99C0'}} onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;