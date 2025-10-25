import app from './app.js';
import connectDB from './config/db.js';
import 'dotenv/config';

const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
  console.log(`Server is up and listening on PORT: ${PORT}`);
});
