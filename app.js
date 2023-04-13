const express = require("express");

const PORT = 3001;

const HTML = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <style>
      html {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: lightyellow;
      }
      section {
        border-radius: 1em; padding: 1em;
        position: absolute; top: 50%; left: 50%; margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      <p>Hello from Render!</p>
    </section>
  </body>
</html>
`;  // end HTML

const app = express();

app.get("/", (req, res) => {
   res.type('html').send(HTML);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));

/****************************************************************************************************************/

