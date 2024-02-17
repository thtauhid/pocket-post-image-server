import { MAIN_APP_URL } from "./constants.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  // get query params
  console.log("Reqest Received");

  const { id } = req.query;
  console.log("Processing response for id: ", id);

  // sends a fetch request for the increment but doesn't wait for the response
  fetch(`${MAIN_APP_URL}/api/update/${id}`);

  const gif = Buffer.from(
    "R0lGODlhBwAHAIAAAP///wAAACH5BAEAAAAALAAAAAAHAAcAAAIPlI+py+0Po5yUFQA7",
    "base64"
  );

  res.writeHead(200, {
    "Content-Type": "image/gif",
    "Content-Length": gif.length,
  });

  res.end(gif);

  console.log("Response processed");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
