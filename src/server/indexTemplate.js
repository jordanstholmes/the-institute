const indexHTMLTemplate = reactStr => `
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset="UTF-8">
      <title>Chet Holmes Institute</title>
      <!-- <link href="CSS FILEPATH/NAME HERE" rel="stylesheet" type="text/css"/> -->
    </head>

    <body>
      <div id="app">${reactStr}</div>
    </body>
    <script src="/lib/react.development.js"></script>
    <script src="/lib/react-dom.development.js"></script>
    <script src="./bundle.js"></script>
  </html>`;

export default indexHTMLTemplate;
