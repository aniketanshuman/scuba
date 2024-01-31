const express = require("express");
const fs = require('fs').promises;
const {
  getHttpOperationsFromSpec,
} = require("@stoplight/prism-cli/dist/operations");
const {
  createClientFromOperations,
} = require("@stoplight/prism-http/dist/client");
const { URL } = require("url");
const axios = require('axios')

const app = express();
const cors = require("cors");
const PORT = 3001;

app.use(cors());

app.get("/", async (req, res) => {
  const apiUrl = req.query.apiUrl;
  console.log("apiUrl", apiUrl);

  if (!apiUrl) {
    return res.status(400).json({ error: "API URL is required" });
  }

  
});

app.get("/mock", async (req, res) => {
  const apiUrl = req.query.apiUrl;
  const methodType = req.method;
  let internalApiResponse = null;
  if("GET" === methodType){
    internalApiResponse = await axios.get(apiUrl);
  }else if("POST" === methodType){
    internalApiResponse = await axios.post(apiUrl,req);
  }
  const processedData = internalApiResponse.data;
  await fs.writeFile('response.json', JSON.stringify(processedData, null, 2), 'utf-8');
  res.status(200).json({ message: "Success", data: processedData });
});

app.listen(PORT, () => {
  console.log(`Mock API server is running at http://localhost:${PORT}`);
});
