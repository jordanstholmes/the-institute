const favIconUri = 'https://s3-us-west-1.amazonaws.com/chet-holmes-institute/red-gear.png';

const generateStaticPage = reactStr => `
  <!DOCTYPE html>
  <html>

    <head>
      <meta charset="UTF-8">
      <title>Chet Holmes Institute</title>
      <link rel="icon" type="image/png" href="${favIconUri}">
      <link href="https://fonts.googleapis.com/css?family=Roboto:300" rel="stylesheet">
    </head>

    <body>
      <div id="app">${reactStr}</div>
    </body>
    <script src="./bundle.js"></script>
  </html>
`;

export default generateStaticPage;
