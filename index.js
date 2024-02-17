const app = require("express")();

app.get("/", (req, res) => {
  console.log("Reqest received");
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
