import app from './app';

const port = process.env.PORT || 7000;
const url = process.env.URL || 'localhost';

app.listen(port, () => console.log(`Server on ${url} using port ${port}`));
