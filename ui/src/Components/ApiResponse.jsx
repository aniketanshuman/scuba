import React from 'react';

const ApiResponse = ({ response }) => {
  return (
    <div>
      <h2>API Response:</h2>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};

export default ApiResponse;
