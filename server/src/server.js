import app from './app.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config({ path: './src/config/.env' });

const port = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`listening at ${port}`);
  });
});
