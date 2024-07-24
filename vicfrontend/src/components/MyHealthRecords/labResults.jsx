import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LabResults = () => {
  const [labResultsHTML, setLabResultsHTML] = useState('');
  const [readableContent, setReadableContent] = useState('');

  useEffect(() => {
    // Fetch HTML content from the backend
    const fetchLabResults = async () => {
      try {
        const response = await axios.get('http://192.168.88.198:5500/api/viewlabresults');
        setLabResultsHTML(response.data);
      } catch (error) {
        console.error('Failed to fetch lab results:', error);
      }
    };

    fetchLabResults();
  }, []);

  useEffect(() => {
    if (labResultsHTML) {
      // Parse HTML content and extract readable information
      const parser = new DOMParser();
      const doc = parser.parseFromString(labResultsHTML, 'text/html');

      // Example: Extracting text from all <p> elements
      const paragraphs = doc.querySelectorAll('p');
      let content = '';
      paragraphs.forEach(paragraph => {
        content += paragraph.textContent + '\n';
      });

      setReadableContent(content);
    }
  }, [labResultsHTML]);

  return (
    <div>
      <h1>Lab Results</h1>
      {readableContent ? (
        <pre>{readableContent}</pre>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: labResultsHTML }} />
      )}
    </div>
  );
};

export default LabResults;
