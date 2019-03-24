const favIconUri = 'https://s3-us-west-1.amazonaws.com/chet-holmes-institute/red-gear.png';

const indexHTMLTemplate = reactStr => `
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset="UTF-8">
      <title>Chet Holmes Institute</title>
      <link rel="icon" type="image/png" href="${favIconUri}">
      <!-- <link href="CSS FILEPATH/NAME HERE" rel="stylesheet" type="text/css"/> -->
    </head>

    <body>
      <div id="app">${reactStr}</div>
    </body>
    <script src="./bundle.js"></script>
  </html>`;

export default indexHTMLTemplate;
