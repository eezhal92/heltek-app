import './module-alias';
import app from './src/http/app';

const port = 5000;

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
});