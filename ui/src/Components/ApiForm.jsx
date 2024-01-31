import React, { useState } from 'react';

const ApiForm = ({ onSubmit }) => {
  const [apiUrl, setApiUrl] = useState('');

  const handleSubmit = () => {
    onSubmit(apiUrl);
  };

  return (
    <div>
      <label htmlFor="apiUrl">Enter OpenAPI URL:</label>
      <input
        type="text"
        id="apiUrl"
        value={apiUrl}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder="https://dummyjson/users"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ApiForm;
