const express = require('express');
const { createServer } = require('@stoplight/prism-http-server');

const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());

const createPrismServer = async () => {
  const prism = await createServer({});

  console.log(`Prism is running at http://localhost:${prism.config.port}`);

  return prism;
};

app.get('/mock', async (req, res) => {
  const apiUrl = req.query.apiUrl;
  console.log("apiUrl", apiUrl);

  if (!apiUrl) {
    return res.status(400).json({ error: 'API URL is required' });
  }

  const prism = await createPrismServer();

  try {
    // Mock the response using Prism in dynamic mode
    const response = await prism.process({
      method: 'GET',
      url: req.url,
      remote: apiUrl,
    });

    res.status(response.statusCode).json(response.body);
  } catch (error) {
    console.error('Error mocking API:', error);
    res.status(500).json({ error: 'Error mocking API' });
  } finally {
    // Close the Prism server after processing the request
    await prism.close();
  }
});

app.listen(PORT, () => {
  console.log(`Mock API server is running at http://localhost:${PORT}`);
});
