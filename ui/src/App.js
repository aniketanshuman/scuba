// src/App.js
import React, { useState } from 'react';
import ApiForm from './Components/ApiForm';
import ApiResponse from './Components/ApiResponse';
import axios from 'axios';

function App() {
  const [apiResponse, setApiResponse] = useState(null);

  const handleSubmit = async (apiUrl) => {
    try {
      const response = await axios.get(`/mock?apiUrl=${encodeURIComponent(apiUrl)}`);
      setApiResponse(response.data);
    } catch (error) {
      console.error('Error making API request:', error);
    }
  };

  return (
    <div>
      <ApiForm onSubmit={handleSubmit} />
      {apiResponse && <ApiResponse response={apiResponse} />}
    </div>
  );
}

export default App;
