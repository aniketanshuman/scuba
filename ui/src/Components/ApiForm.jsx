import React, { useState } from 'react';

const ApiForm = ({ onSubmit }) => {
  const [apiUrl, setApiUrl] = useState('');

  const handleSubmit = () => {
    onSubmit("https://dummyjson.com/users");
  };

  return (
    <div>
      <label htmlFor="apiUrl">Enter OpenAPI URL:</label>
      <input
        type="text"
        id="apiUrl"
        value={"https://dummyjson.com/users"}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder=""
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ApiForm;
